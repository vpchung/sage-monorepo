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
 * A recursive ValidationException that describes all schema violations for an entire schema tree.
 */
export interface OrgSagebionetworksRepoModelSchemaValidationException {
  keyword?: string;
  pointerToViolation?: string;
  message?: string;
  schemaLocation?: string;
  /**
   * An array of sub-exceptions.
   */
  causingExceptions?: Array<OrgSagebionetworksRepoModelSchemaValidationException>;
}
