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
import { OrgSagebionetworksRepoModelDownloadSort } from './orgSagebionetworksRepoModelDownloadSort';

/**
 * Request to get a single page of files from the user\'s download list for files that are currently available for download.
 */
export interface OrgSagebionetworksRepoModelDownloadDownloadListPageRequest {
  nextPageToken?: string;
  /**
   * Optional: Defines how the results should be sorted. Up to three fields can be sorted at a time.  The order of this array determines the sort priority.
   */
  sort?: Array<OrgSagebionetworksRepoModelDownloadSort>;
  nameContains?: string;
}