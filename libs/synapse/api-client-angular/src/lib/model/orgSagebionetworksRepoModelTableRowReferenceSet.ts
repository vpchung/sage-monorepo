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
import { OrgSagebionetworksRepoModelTableRowReference } from './orgSagebionetworksRepoModelTableRowReference';
import { OrgSagebionetworksRepoModelTableSelectColumn } from './orgSagebionetworksRepoModelTableSelectColumn';

/**
 * Represents a set of RowReferences of a TableEntity
 */
export interface OrgSagebionetworksRepoModelTableRowReferenceSet {
  tableId?: string;
  etag?: string;
  /**
   * The list of ColumnModels ID that describes the rows of this set.
   */
  headers?: Array<OrgSagebionetworksRepoModelTableSelectColumn>;
  /**
   * Each RowReference of this list refers to a single version of a single row of a TableEntity.
   */
  rows?: Array<OrgSagebionetworksRepoModelTableRowReference>;
}
