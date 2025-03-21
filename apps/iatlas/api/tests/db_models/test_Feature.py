import pytest
from tests import NoneType
from api.database import return_feature_query
from api.enums import unit_enum


@pytest.fixture(scope="module")
def display():
    return "Eosinophils"


@pytest.fixture(scope="module")
def name():
    return "Eosinophils"


@pytest.fixture(scope="module")
def unit():
    return "Fraction"


@pytest.fixture(scope="module")
def method_tag():
    return "CIBERSORT"


def test_Feature_with_relations(app, display, name, unit, method_tag):
    relationships_to_join = ["feature_class", "method_tag", "samples"]

    query = return_feature_query(*relationships_to_join)
    result = query.filter_by(name=name).first()

    if result.samples:
        assert isinstance(result.samples, list)
        # Don't need to iterate through every result.
        for sample in result.samples[0:2]:
            assert type(sample.name) is str
    assert result.name == name
    assert result.display == display
    assert result.unit == unit
    assert result.method_tag == method_tag
    assert type(result.feature_class) == str
    assert type(result.germline_category) is str or NoneType
    assert type(result.germline_module) is str or NoneType
    assert result.unit in unit_enum.enums or type(result.unit) is NoneType
    assert repr(result) == "<Feature %r>" % name


def test_Feature_with_copy_number_results(app, name):
    query = return_feature_query("copy_number_results")
    result = query.filter_by(name=name).first()

    if result.copy_number_results:
        assert isinstance(result.copy_number_results, list)
        # Don't need to iterate through every result.
        for copy_number_result in result.copy_number_results[0:2]:
            assert copy_number_result.feature_id == result.id


def test_Feature_with_driver_results(app, name):
    query = return_feature_query("driver_results")
    result = query.filter_by(name=name).first()

    if result.driver_results:
        assert isinstance(result.driver_results, list)
        # Don't need to iterate through every result.
        for driver_result in result.driver_results[0:2]:
            assert driver_result.feature_id == result.id


def test_Feature_with_feature_sample_assoc(app, name):
    query = return_feature_query("feature_sample_assoc")
    result = query.filter_by(name=name).first()

    if result.feature_sample_assoc:
        assert isinstance(result.feature_sample_assoc, list)
        # Don't need to iterate through every result.
        for feature_sample_rel in result.feature_sample_assoc[0:2]:
            assert feature_sample_rel.feature_id == result.id


def test_Feature_no_relations(app, display, name):
    query = return_feature_query()
    result = query.filter_by(name=name).first()

    assert type(result.feature_class) is str or NoneType
    assert type(result.method_tag) is str or NoneType
    assert result.samples == []
    assert result.copy_number_results == []
    assert result.driver_results == []
    assert result.feature_sample_assoc == []
    assert result.name == name
    assert result.display == display
    assert type(result.germline_category) is str or NoneType
    assert type(result.germline_module) is str or NoneType
    assert result.unit in unit_enum.enums or type(result.unit) is NoneType
