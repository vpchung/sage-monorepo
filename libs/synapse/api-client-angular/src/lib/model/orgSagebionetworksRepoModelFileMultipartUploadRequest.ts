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
 * Request to start or continue a multi-part file upload.
 */
export interface OrgSagebionetworksRepoModelFileMultipartUploadRequest {
  concreteType: OrgSagebionetworksRepoModelFileMultipartUploadRequest.ConcreteTypeEnum;
  partSizeBytes?: number;
  fileName?: string;
  storageLocationId?: number;
  generatePreview?: boolean;
  contentMD5Hex?: string;
  contentType?: string;
  fileSizeBytes?: number;
}
export namespace OrgSagebionetworksRepoModelFileMultipartUploadRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.file.MultipartUploadRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelFileMultipartUploadRequest:
      'org.sagebionetworks.repo.model.file.MultipartUploadRequest' as ConcreteTypeEnum,
  };
}
