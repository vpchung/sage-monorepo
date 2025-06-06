/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelDownloadActionRequiredCount } from './orgSagebionetworksRepoModelDownloadActionRequiredCount';

/**
 * Represents a single page of actions that the user will need to take in order to gain access to one or more files on their download list.
 */
export interface OrgSagebionetworksRepoModelDownloadActionRequiredResponse {
  concreteType: OrgSagebionetworksRepoModelDownloadActionRequiredResponse.ConcreteTypeEnum;
  /**
   * The page of ActionRequiredCount
   */
  page?: Array<OrgSagebionetworksRepoModelDownloadActionRequiredCount>;
  nextPageToken?: string;
}
export namespace OrgSagebionetworksRepoModelDownloadActionRequiredResponse {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.download.ActionRequiredResponse';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelDownloadActionRequiredResponse:
      'org.sagebionetworks.repo.model.download.ActionRequiredResponse' as ConcreteTypeEnum,
  };
}
