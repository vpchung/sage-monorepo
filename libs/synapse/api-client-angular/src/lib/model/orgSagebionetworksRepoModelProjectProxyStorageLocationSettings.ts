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
 * A storage location that uses a HTTPS proxy for all upload and download operations.
 */
export interface OrgSagebionetworksRepoModelProjectProxyStorageLocationSettings {
  concreteType: OrgSagebionetworksRepoModelProjectProxyStorageLocationSettings.ConcreteTypeEnum;
  storageLocationId?: number;
  uploadType?: string;
  banner?: string;
  description?: string;
  etag?: string;
  createdOn?: string;
  createdBy?: number;
  proxyUrl?: string;
  secretKey?: string;
  benefactorId?: string;
}
export namespace OrgSagebionetworksRepoModelProjectProxyStorageLocationSettings {
  export type ConcreteTypeEnum =
    'org.sagebionetworks.repo.model.project.ProxyStorageLocationSettings';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelProjectProxyStorageLocationSettings:
      'org.sagebionetworks.repo.model.project.ProxyStorageLocationSettings' as ConcreteTypeEnum,
  };
}
