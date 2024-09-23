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
 * The Thread model object represents a single Thread.
 */
export interface OrgSagebionetworksRepoModelDiscussionDiscussionThreadBundle {
  id?: string;
  forumId?: string;
  projectId?: string;
  title?: string;
  createdOn?: string;
  createdBy?: string;
  modifiedOn?: string;
  etag?: string;
  messageKey?: string;
  numberOfViews?: number;
  numberOfReplies?: number;
  lastActivity?: string;
  /**
   * The list of userId whose most active on this Thread
   */
  activeAuthors?: Array<string>;
  isEdited?: boolean;
  isDeleted?: boolean;
  isPinned?: boolean;
}
