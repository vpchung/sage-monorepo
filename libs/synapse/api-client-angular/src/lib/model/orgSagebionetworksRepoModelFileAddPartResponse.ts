/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Response from adding a part to multi-part upload or copy.
 */
export interface OrgSagebionetworksRepoModelFileAddPartResponse {
  uploadId?: string;
  partNumber?: number;
  addPartState?: string;
  errorMessage?: string;
}
