/**
 * Synapse REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Selected minimum and maximum values for a range type facet
 */
export interface OrgSagebionetworksRepoModelTableFacetColumnRangeRequest {
  concreteType: OrgSagebionetworksRepoModelTableFacetColumnRangeRequest.ConcreteTypeEnum;
  columnName?: string;
  jsonPath?: string;
  min?: string;
  max?: string;
}
export namespace OrgSagebionetworksRepoModelTableFacetColumnRangeRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableFacetColumnRangeRequest:
      'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest' as ConcreteTypeEnum,
  };
}
