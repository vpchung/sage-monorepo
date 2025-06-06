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
 * A GoogleCloudFileHandle represents a file stored in Google Cloud Storage.
 */
export interface OrgSagebionetworksRepoModelFileGoogleCloudFileHandle {
  id?: string;
  etag?: string;
  createdBy?: string;
  createdOn?: string;
  modifiedOn?: string;
  concreteType: OrgSagebionetworksRepoModelFileGoogleCloudFileHandle.ConcreteTypeEnum;
  contentType?: string;
  contentMd5?: string;
  fileName?: string;
  storageLocationId?: number;
  contentSize?: number;
  status?: string;
  bucketName?: string;
  key?: string;
  previewId?: string;
  isPreview?: boolean;
}
export namespace OrgSagebionetworksRepoModelFileGoogleCloudFileHandle {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelFileGoogleCloudFileHandle:
      'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle' as ConcreteTypeEnum,
  };
}
