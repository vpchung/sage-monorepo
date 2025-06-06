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
 * File event for file upload and download events
 */
export interface OrgSagebionetworksRepoModelFileFileEvent {
  concreteType: OrgSagebionetworksRepoModelFileFileEvent.ConcreteTypeEnum;
  objectId?: string;
  objectVersion?: number;
  objectType?: string;
  timestamp?: string;
  fileEventType?: string;
  userId?: number;
  fileHandleId?: string;
  downloadedFileHandleId?: string;
  associateType?: string;
  associateId?: string;
  stack?: string;
  instance?: string;
  sessionId?: string;
}
export namespace OrgSagebionetworksRepoModelFileFileEvent {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.file.FileEvent';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelFileFileEvent:
      'org.sagebionetworks.repo.model.file.FileEvent' as ConcreteTypeEnum,
  };
}
