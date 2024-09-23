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
import { OrgSagebionetworksRepoModelFileFileHandleAssociation } from './orgSagebionetworksRepoModelFileFileHandleAssociation';

/**
 * Batch Request for file pre-signed-URLs and/or FileHandles.
 */
export interface OrgSagebionetworksRepoModelFileBatchFileRequest {
  /**
   * Defines the files to get.
   */
  requestedFiles?: Array<OrgSagebionetworksRepoModelFileFileHandleAssociation>;
  includePreSignedURLs?: boolean;
  includeFileHandles?: boolean;
  includePreviewPreSignedURLs?: boolean;
}
