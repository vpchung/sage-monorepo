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
import { OrgSagebionetworksRepoModelFileFileHandleRestoreResult } from './orgSagebionetworksRepoModelFileFileHandleRestoreResult';

/**
 * Response of a restore operation. Each item in the list match the order of the file handle id in the original request.
 */
export interface OrgSagebionetworksRepoModelFileFileHandleRestoreResponse {
  concreteType: OrgSagebionetworksRepoModelFileFileHandleRestoreResponse.ConcreteTypeEnum;
  /**
   * The list of restore operation status for each of the file handle in the original request.
   */
  restoreResults?: Array<OrgSagebionetworksRepoModelFileFileHandleRestoreResult>;
}
export namespace OrgSagebionetworksRepoModelFileFileHandleRestoreResponse {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.file.FileHandleRestoreResponse';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelFileFileHandleRestoreResponse:
      'org.sagebionetworks.repo.model.file.FileHandleRestoreResponse' as ConcreteTypeEnum,
  };
}
