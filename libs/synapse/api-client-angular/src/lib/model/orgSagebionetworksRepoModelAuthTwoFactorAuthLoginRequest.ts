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
 * Used to login when two factor authentication is enabled.
 */
export interface OrgSagebionetworksRepoModelAuthTwoFactorAuthLoginRequest {
  userId?: number;
  twoFaToken?: string;
  otpCode?: string;
  otpType?: string;
}
