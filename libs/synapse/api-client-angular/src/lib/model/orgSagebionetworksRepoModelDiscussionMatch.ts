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
 * Represents a match for a search request in a forum, will include the forum and thread ids and if present the reply id matching a serch string
 */
export interface OrgSagebionetworksRepoModelDiscussionMatch {
  forumId?: string;
  threadId?: string;
  replyId?: string;
}
