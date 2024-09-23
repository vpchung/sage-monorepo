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

/**
 * Request to create a new snapshot of a table or view.  The provided comment, label, and activity ID will be applied to the current version thereby creating a snapshot and locking the current version.  After the snapshot is created a new version will be started with an \'in-progress\' label.
 */
export interface OrgSagebionetworksRepoModelTableSnapshotRequest {
  snapshotComment?: string;
  snapshotLabel?: string;
  snapshotActivityId?: string;
}
