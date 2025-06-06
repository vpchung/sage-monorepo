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
