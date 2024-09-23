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
import { OrgSagebionetworksRepoModelTableCsvTableDescriptor } from './orgSagebionetworksRepoModelTableCsvTableDescriptor';

/**
 * Request to package files from a user\'s download list.
 */
export interface OrgSagebionetworksRepoModelDownloadDownloadListPackageRequest {
  concreteType: OrgSagebionetworksRepoModelDownloadDownloadListPackageRequest.ConcreteTypeEnum;
  zipFileName?: string;
  includeManifest?: boolean;
  csvTableDescriptor?: OrgSagebionetworksRepoModelTableCsvTableDescriptor;
}
export namespace OrgSagebionetworksRepoModelDownloadDownloadListPackageRequest {
  export type ConcreteTypeEnum =
    'org.sagebionetworks.repo.model.download.DownloadListPackageRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelDownloadDownloadListPackageRequest:
      'org.sagebionetworks.repo.model.download.DownloadListPackageRequest' as ConcreteTypeEnum,
  };
}
