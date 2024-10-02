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
 * Signed token containing the information for a new user.
 */
export interface OrgSagebionetworksRepoModelAuthNewUserSignedToken {
  concreteType: OrgSagebionetworksRepoModelAuthNewUserSignedToken.ConcreteTypeEnum;
  hmac?: string;
  version?: number;
  expiresOn?: string;
  createdOn?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}
export namespace OrgSagebionetworksRepoModelAuthNewUserSignedToken {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.auth.NewUserSignedToken';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelAuthNewUserSignedToken:
      'org.sagebionetworks.repo.model.auth.NewUserSignedToken' as ConcreteTypeEnum,
  };
}