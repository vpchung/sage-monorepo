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
 * JSON schema for the TrashEntity POJO. A trashed entity is an entity in the trash can.
 */
export interface OrgSagebionetworksRepoModelTrashedEntity {
  entityId?: string;
  entityName?: string;
  entityType?: string;
  deletedByPrincipalId?: string;
  deletedOn?: string;
  originalParentId?: string;
}
