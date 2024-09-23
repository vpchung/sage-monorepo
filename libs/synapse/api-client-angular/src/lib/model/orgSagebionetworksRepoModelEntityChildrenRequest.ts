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
 * Request for EntityHeaders of the children of a given parent Entity
 */
export interface OrgSagebionetworksRepoModelEntityChildrenRequest {
  parentId?: string;
  nextPageToken?: string;
  /**
   * The types of children to be include. Must include at least one type.
   */
  includeTypes?: Array<string>;
  sortBy?: string;
  sortDirection?: string;
  includeTotalChildCount?: boolean;
  includeSumFileSizes?: boolean;
}
