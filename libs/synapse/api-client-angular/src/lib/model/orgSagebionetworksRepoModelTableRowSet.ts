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
import { OrgSagebionetworksRepoModelTableRow } from './orgSagebionetworksRepoModelTableRow';
import { OrgSagebionetworksRepoModelTableSelectColumn } from './orgSagebionetworksRepoModelTableSelectColumn';

/**
 * Represents a set of row of a TableEntity
 */
export interface OrgSagebionetworksRepoModelTableRowSet {
  concreteType: OrgSagebionetworksRepoModelTableRowSet.ConcreteTypeEnum;
  tableId?: string;
  etag?: string;
  /**
   * The list of SelectColumns that describes the rows of this set.
   */
  headers?: Array<OrgSagebionetworksRepoModelTableSelectColumn>;
  /**
   * The Rows of this set.  The index of each row value aligns with the index of each header.
   */
  rows?: Array<OrgSagebionetworksRepoModelTableRow>;
}
export namespace OrgSagebionetworksRepoModelTableRowSet {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.RowSet';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableRowSet:
      'org.sagebionetworks.repo.model.table.RowSet' as ConcreteTypeEnum,
  };
}
