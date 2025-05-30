/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The response body of an asynchronous storage report CSV download job.
 */
export interface OrgSagebionetworksRepoModelReportDownloadStorageReportResponse {
  concreteType: OrgSagebionetworksRepoModelReportDownloadStorageReportResponse.ConcreteTypeEnum;
  resultsFileHandleId?: string;
}
export namespace OrgSagebionetworksRepoModelReportDownloadStorageReportResponse {
  export type ConcreteTypeEnum =
    'org.sagebionetworks.repo.model.report.DownloadStorageReportResponse';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelReportDownloadStorageReportResponse:
      'org.sagebionetworks.repo.model.report.DownloadStorageReportResponse' as ConcreteTypeEnum,
  };
}
