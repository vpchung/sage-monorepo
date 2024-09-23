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
import { OrgSagebionetworksRepoModelMessageCloudmailinHeaders } from './orgSagebionetworksRepoModelMessageCloudmailinHeaders';
import { OrgSagebionetworksRepoModelMessageCloudmailinAttachment } from './orgSagebionetworksRepoModelMessageCloudmailinAttachment';
import { OrgSagebionetworksRepoModelMessageCloudmailinEnvelope } from './orgSagebionetworksRepoModelMessageCloudmailinEnvelope';

/**
 * JSON schema for the CloudMainIn message format
 */
export interface OrgSagebionetworksRepoModelMessageCloudmailinMessage {
  envelope?: OrgSagebionetworksRepoModelMessageCloudmailinEnvelope;
  headers?: OrgSagebionetworksRepoModelMessageCloudmailinHeaders;
  plain?: string;
  html?: string;
  reply_plain?: string;
  /**
   * Attachments to the message.
   */
  attachments?: Array<OrgSagebionetworksRepoModelMessageCloudmailinAttachment>;
}
