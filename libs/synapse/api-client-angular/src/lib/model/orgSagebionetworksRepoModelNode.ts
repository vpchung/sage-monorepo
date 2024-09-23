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
import { OrgSagebionetworksRepoModelEntityRef } from './orgSagebionetworksRepoModelEntityRef';
import { OrgSagebionetworksRepoModelReference } from './orgSagebionetworksRepoModelReference';

/**
 * This is the DTO of a node.
 */
export interface OrgSagebionetworksRepoModelNode {
  id?: string;
  name?: string;
  description?: string;
  parentId?: string;
  createdByPrincipalId?: number;
  createdOn?: string;
  modifiedByPrincipalId?: number;
  modifiedOn?: string;
  nodeType?: string;
  eTag?: string;
  versionNumber?: number;
  versionComment?: string;
  versionLabel?: string;
  isLatestVersion?: boolean;
  activityId?: string;
  fileHandleId?: string;
  columnModelIds?: Array<string>;
  /**
   * For FileVeiws, the list of IDs the define the scope of the view.
   */
  scopeIds?: Array<string>;
  /**
   * For Datasets and Dataset Collections, the list of entity references the define the view.
   */
  items?: Array<OrgSagebionetworksRepoModelEntityRef>;
  reference?: OrgSagebionetworksRepoModelReference;
  alias?: string;
  isSearchEnabled?: boolean;
  definingSQL?: string;
}
