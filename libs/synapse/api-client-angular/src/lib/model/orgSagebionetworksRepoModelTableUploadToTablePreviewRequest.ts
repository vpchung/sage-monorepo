/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelTableCsvTableDescriptor } from './orgSagebionetworksRepoModelTableCsvTableDescriptor';

/**
 * Request for a preview of an upload to a Table.
 */
export interface OrgSagebionetworksRepoModelTableUploadToTablePreviewRequest {
  concreteType: OrgSagebionetworksRepoModelTableUploadToTablePreviewRequest.ConcreteTypeEnum;
  uploadFileHandleId?: string;
  linesToSkip?: number;
  csvTableDescriptor?: OrgSagebionetworksRepoModelTableCsvTableDescriptor;
  doFullFileScan?: boolean;
}
export namespace OrgSagebionetworksRepoModelTableUploadToTablePreviewRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.UploadToTablePreviewRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableUploadToTablePreviewRequest:
      'org.sagebionetworks.repo.model.table.UploadToTablePreviewRequest' as ConcreteTypeEnum,
  };
}
