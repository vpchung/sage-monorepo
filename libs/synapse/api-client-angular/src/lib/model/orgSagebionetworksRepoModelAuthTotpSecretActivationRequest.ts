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
 * Activate the TOTP secret for the user to be used in two factor authentication
 */
export interface OrgSagebionetworksRepoModelAuthTotpSecretActivationRequest {
  secretId?: string;
  totp?: string;
}
