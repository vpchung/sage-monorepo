/**
 * Synapse REST API
 *
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
