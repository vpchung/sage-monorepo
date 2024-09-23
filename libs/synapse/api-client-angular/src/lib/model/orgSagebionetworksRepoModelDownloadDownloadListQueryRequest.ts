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
import { OrgSagebionetworksRepoModelDownloadQueryRequestDetails } from './orgSagebionetworksRepoModelDownloadQueryRequestDetails';

/**
 * A request to start an asynchronous job to query a user\'s download list.  The type of query is defined by provided requestDetails.
 */
export interface OrgSagebionetworksRepoModelDownloadDownloadListQueryRequest {
  concreteType: OrgSagebionetworksRepoModelDownloadDownloadListQueryRequest.ConcreteTypeEnum;
  requestDetails?: OrgSagebionetworksRepoModelDownloadQueryRequestDetails;
}
export namespace OrgSagebionetworksRepoModelDownloadDownloadListQueryRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.download.DownloadListQueryRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelDownloadDownloadListQueryRequest:
      'org.sagebionetworks.repo.model.download.DownloadListQueryRequest' as ConcreteTypeEnum,
  };
}
