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
 * Result item of an Access Requirement search
 */
export interface OrgSagebionetworksRepoModelDataaccessAccessRequirementSearchResult {
  id?: string;
  type?: string;
  createdOn?: string;
  modifiedOn?: string;
  name?: string;
  version?: string;
  /**
   * List of project ids which the AR is direclty or indirectly applied to
   */
  relatedProjectIds?: Array<string>;
  /**
   * List of principal ids that are allowed to review the AR submissions
   */
  reviewerIds?: Array<string>;
}
