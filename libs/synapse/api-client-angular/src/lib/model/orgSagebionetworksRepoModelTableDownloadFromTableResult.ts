/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelTableSelectColumn } from './orgSagebionetworksRepoModelTableSelectColumn';

/**
 * The response body of an asynchronous CSV table download job.
 */
export interface OrgSagebionetworksRepoModelTableDownloadFromTableResult {
  concreteType: OrgSagebionetworksRepoModelTableDownloadFromTableResult.ConcreteTypeEnum;
  resultsFileHandleId?: string;
  tableId?: string;
  etag?: string;
  /**
   * The list of SelectColumns that describes the rows of this set.
   */
  headers?: Array<OrgSagebionetworksRepoModelTableSelectColumn>;
}
export namespace OrgSagebionetworksRepoModelTableDownloadFromTableResult {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.DownloadFromTableResult';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableDownloadFromTableResult:
      'org.sagebionetworks.repo.model.table.DownloadFromTableResult' as ConcreteTypeEnum,
  };
}
