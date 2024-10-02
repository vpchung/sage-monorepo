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
import { OrgSagebionetworksRepoModelOauthOIDCClaimsRequestDetails } from './orgSagebionetworksRepoModelOauthOIDCClaimsRequestDetails';

/**
 * Metadata related to an issued personal access token. After the token has been generated, it cannot be retrieved.
 */
export interface OrgSagebionetworksRepoModelAuthAccessTokenRecord {
  id?: string;
  userId?: string;
  /**
   * The scopes that have been granted to this token
   */
  scopes?: Array<string>;
  /**
   * The OIDC claims that can be accessed using this token.
   */
  userInfoClaims?: { [key: string]: OrgSagebionetworksRepoModelOauthOIDCClaimsRequestDetails };
  name?: string;
  createdOn?: string;
  lastUsed?: string;
  state?: string;
}