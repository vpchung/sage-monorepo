import json
import pytest
from tests import NoneType
from api.resolvers.resolver_helpers.paging_utils import (
    from_cursor_hash,
    to_cursor_hash,
    Paging,
)
from api.database import return_germline_gwas_result_query


@pytest.fixture(scope="module")
def test_ggr():
    return {
        "dataset": "TCGA",
        "feature": "Module3_IFN_score",
        "snp": "3:133016759:C:G",
        "germline_category": "Expression Signature",
        "germline_module": "IFN Response",
    }


@pytest.fixture(scope="module")
def ggr_feature():
    return "Cell_Proportion_B_Cells_Memory_Binary_MedianLowHigh"


@pytest.fixture(scope="module")
def ggr_germline_module():
    return "Unassigned"


@pytest.fixture(scope="module")
def ggr_germline_category():
    return "Leukocyte Subset %"


@pytest.fixture(scope="module")
def ggr_snp():
    return "7:104003135:C:G"


@pytest.fixture(scope="module")
def ggr_max_p_value():
    # return 0.000000000000712
    return 9.9e-8


@pytest.fixture(scope="module")
def ggr_min_p_value():
    return 1.0e-07


@pytest.fixture(scope="module")
def common_query_builder():
    def f(query_fields):
        return (
            """query GermlineGwasResults(
            $paging: PagingInput
            $distinct: Boolean
            $dataSet: [String!]
            $feature: [String!]
            $snp: [String!]
            $minPValue: Float
            $maxPValue: Float
    ) {
        germlineGwasResults(
            paging: $paging
            distinct: $distinct
            dataSet: $dataSet
            feature: $feature
            snp: $snp
            minPValue: $minPValue
            maxPValue: $maxPValue
        )"""
            + query_fields
            + "}"
        )

    return f


@pytest.fixture(scope="module")
def common_query(common_query_builder):
    return common_query_builder(
        """{
            items {
                dataSet { name }
                feature {
                  name
                  germlineCategory
                  germlineModule
                }
                snp { name }
                pValue
                maf
            }
            paging {
                type
                pages
                total
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
                page
                limit
            }
            error
        }"""
    )


# Test that forward cursor pagination gives us the expected paginInfo


def test_germlineGwasResults_cursor_pagination_first(client, common_query_builder):
    query = common_query_builder(
        """{
            items {
                id
            }
            paging {
                type
                pages
                total
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
                page
                limit
            }
        }"""
    )
    num = 10
    response = client.post(
        "/api", json={"query": query, "variables": {"paging": {"first": num}}}
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    items = page["items"]
    paging = page["paging"]
    start = from_cursor_hash(paging["startCursor"])
    end = from_cursor_hash(paging["endCursor"])

    assert len(items) == num
    assert paging["hasNextPage"] == True
    assert paging["hasPreviousPage"] == False
    assert start == items[0]["id"]
    assert end == items[num - 1]["id"]


def test_germlineGwasResults_cursor_pagination_last(client, common_query_builder):
    query = common_query_builder(
        """{
            items {
                id
            }
            paging {
                type
                pages
                total
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
                page
                limit
            }
        }"""
    )
    num = 10
    response = client.post(
        "/api",
        json={
            "query": query,
            "variables": {
                "paging": {
                    "last": num,
                }
            },
        },
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    items = page["items"]
    paging = page["paging"]
    start = from_cursor_hash(paging["startCursor"])
    end = from_cursor_hash(paging["endCursor"])

    assert len(items) == num
    assert paging["hasNextPage"] == False
    assert paging["hasPreviousPage"] == True
    assert start == items[0]["id"]
    assert end == items[num - 1]["id"]


def test_germlineGwasResults_cursor_distinct_pagination(client, common_query):
    page_num = 1
    num = 10
    response = client.post(
        "/api",
        json={
            "query": common_query,
            "variables": {
                "paging": {
                    "page": page_num,
                    "first": num,
                },
                "distinct": True,
                "dataSet": ["TCGA"],
            },
        },
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    items = page["items"]

    assert len(items) == num
    assert page_num == page["paging"]["page"]


def test_germlineGwasResults_query_with_passed_dataset_snp_and_feature(
    client, common_query, test_ggr
):
    response = client.post(
        "/api",
        json={
            "query": common_query,
            "variables": {
                "dataSet": [test_ggr["dataset"]],
                "feature": [test_ggr["feature"]],
                "snp": [test_ggr["snp"]],
            },
        },
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    results = page["items"]
    assert isinstance(results, list)
    assert len(results) > 0
    for result in results[0:2]:
        assert result["dataSet"]["name"] == test_ggr["dataset"]
        assert result["feature"]["name"] == test_ggr["feature"]
        assert result["snp"]["name"] == test_ggr["snp"]


def test_germlineGwasResults_query_with_passed_min_p_value(
    client, common_query_builder, ggr_min_p_value
):
    query = common_query_builder(
        """{
            items { pValue }
        }"""
    )
    response = client.post(
        "/api", json={"query": query, "variables": {"minPValue": ggr_min_p_value}}
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    results = page["items"]
    assert isinstance(results, list)
    assert len(results) > 0
    for result in results[0:2]:
        assert result["pValue"] >= ggr_min_p_value


def test_germlineGwasResults_query_with_passed_max_p_value(
    client, common_query_builder, ggr_max_p_value
):
    query = common_query_builder(
        """{
            items { pValue }
        }"""
    )
    response = client.post(
        "/api", json={"query": query, "variables": {"maxPValue": ggr_max_p_value}}
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    results = page["items"]
    assert isinstance(results, list)
    assert len(results) > 0
    for result in results[0:2]:
        assert result["pValue"] <= ggr_max_p_value


def test_germlineGwasResults_query_with_no_arguments(client, common_query_builder):
    query = common_query_builder(
        """{
            items {
                pValue
                feature {
                    name
                }
            }
        }"""
    )
    response = client.post("/api", json={"query": query})
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    germline_gwas_results = page["items"]
    # Get the total number of hr results in the database.
    ggr_count = return_germline_gwas_result_query("id").count()

    assert isinstance(germline_gwas_results, list)
    assert len(germline_gwas_results) == ggr_count
    for germline_gwas_result in germline_gwas_results[0:2]:
        assert type(germline_gwas_result["pValue"]) is float or NoneType


def test_germlineGwasResults_query_with_germline_fetaure(
    client, common_query, test_ggr
):
    response = client.post(
        "/api",
        json={"query": common_query, "variables": {"feature": [test_ggr["feature"]]}},
    )
    json_data = json.loads(response.data)
    page = json_data["data"]["germlineGwasResults"]
    results = page["items"]
    assert isinstance(results, list)
    assert len(results) > 1
    for result in results:
        assert result["feature"]["name"] == test_ggr["feature"]
        assert result["feature"]["germlineCategory"] == test_ggr["germline_category"]
        assert result["feature"]["germlineModule"] == test_ggr["germline_module"]
