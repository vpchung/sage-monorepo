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
import { OrgSagebionetworksRepoModelTableQueryBundleRequest } from './orgSagebionetworksRepoModelTableQueryBundleRequest';
import { OrgSagebionetworksRepoModelTableFacetColumnRequest } from './orgSagebionetworksRepoModelTableFacetColumnRequest';
import { OrgSagebionetworksRepoModelTableTableSchemaChangeRequest } from './orgSagebionetworksRepoModelTableTableSchemaChangeRequest';
import { OrgSagebionetworksRepoModelTableTableUpdateTransactionRequest } from './orgSagebionetworksRepoModelTableTableUpdateTransactionRequest';
import { OrgSagebionetworksRepoModelTableAppendableRowSet } from './orgSagebionetworksRepoModelTableAppendableRowSet';
import { OrgSagebionetworksRepoModelTableAppendableRowSetRequest } from './orgSagebionetworksRepoModelTableAppendableRowSetRequest';
import { OrgSagebionetworksRepoModelTableQueryFilter } from './orgSagebionetworksRepoModelTableQueryFilter';
import { OrgSagebionetworksRepoModelTableQueryNextPageToken } from './orgSagebionetworksRepoModelTableQueryNextPageToken';
import { OrgSagebionetworksRepoModelTableSnapshotRequest } from './orgSagebionetworksRepoModelTableSnapshotRequest';
import { OrgSagebionetworksRepoModelTableSortItem } from './orgSagebionetworksRepoModelTableSortItem';
import { OrgSagebionetworksRepoModelTableDownloadFromTableRequest } from './orgSagebionetworksRepoModelTableDownloadFromTableRequest';
import { OrgSagebionetworksRepoModelTableTableSearchChangeRequest } from './orgSagebionetworksRepoModelTableTableSearchChangeRequest';
import { OrgSagebionetworksRepoModelTableCsvTableDescriptor } from './orgSagebionetworksRepoModelTableCsvTableDescriptor';
import { OrgSagebionetworksRepoModelTableColumnChange } from './orgSagebionetworksRepoModelTableColumnChange';
import { OrgSagebionetworksRepoModelTableQuery } from './orgSagebionetworksRepoModelTableQuery';
import { OrgSagebionetworksRepoModelTableUploadToTableRequest } from './orgSagebionetworksRepoModelTableUploadToTableRequest';

/**
 * The object that implements this interface contains an entityId.
 */
/**
 * @type OrgSagebionetworksRepoModelTableHasEntityId
 * The object that implements this interface contains an entityId.
 * @export
 */
export type OrgSagebionetworksRepoModelTableHasEntityId =
  | OrgSagebionetworksRepoModelTableAppendableRowSetRequest
  | OrgSagebionetworksRepoModelTableDownloadFromTableRequest
  | OrgSagebionetworksRepoModelTableQueryBundleRequest
  | OrgSagebionetworksRepoModelTableQueryNextPageToken
  | OrgSagebionetworksRepoModelTableTableSchemaChangeRequest
  | OrgSagebionetworksRepoModelTableTableSearchChangeRequest
  | OrgSagebionetworksRepoModelTableTableUpdateTransactionRequest
  | OrgSagebionetworksRepoModelTableUploadToTableRequest;
