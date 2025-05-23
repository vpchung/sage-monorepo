/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelTableTableSearchChangeRequest } from './orgSagebionetworksRepoModelTableTableSearchChangeRequest';
import { OrgSagebionetworksRepoModelTableTableSchemaChangeRequest } from './orgSagebionetworksRepoModelTableTableSchemaChangeRequest';
import { OrgSagebionetworksRepoModelTableCsvTableDescriptor } from './orgSagebionetworksRepoModelTableCsvTableDescriptor';
import { OrgSagebionetworksRepoModelTableAppendableRowSet } from './orgSagebionetworksRepoModelTableAppendableRowSet';
import { OrgSagebionetworksRepoModelTableAppendableRowSetRequest } from './orgSagebionetworksRepoModelTableAppendableRowSetRequest';
import { OrgSagebionetworksRepoModelTableColumnChange } from './orgSagebionetworksRepoModelTableColumnChange';
import { OrgSagebionetworksRepoModelTableUploadToTableRequest } from './orgSagebionetworksRepoModelTableUploadToTableRequest';

/**
 * Abstraction for a request to update a table.
 */
/**
 * @type OrgSagebionetworksRepoModelTableTableUpdateRequest
 * Abstraction for a request to update a table.
 * @export
 */
export type OrgSagebionetworksRepoModelTableTableUpdateRequest =
  | OrgSagebionetworksRepoModelTableAppendableRowSetRequest
  | OrgSagebionetworksRepoModelTableTableSchemaChangeRequest
  | OrgSagebionetworksRepoModelTableTableSearchChangeRequest
  | OrgSagebionetworksRepoModelTableUploadToTableRequest;
