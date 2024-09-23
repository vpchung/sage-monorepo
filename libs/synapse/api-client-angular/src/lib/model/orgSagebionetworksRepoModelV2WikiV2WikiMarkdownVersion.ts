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
 * A V2WikiMarkdownVersion contains the markdown file handle id and title of a specific version of a V2WikiPage
 */
export interface OrgSagebionetworksRepoModelV2WikiV2WikiMarkdownVersion {
  version?: string;
  title?: string;
  markdownFileHandleId?: string;
  /**
   * The list of attachment file handle ids of this page for this version.
   */
  attachmentFileHandleIds?: Array<string>;
}
