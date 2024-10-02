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
import { OrgSagebionetworksRepoModelQuizQuestionResponse } from './orgSagebionetworksRepoModelQuizQuestionResponse';

/**
 * The set of responses to a Quiz
 */
export interface OrgSagebionetworksRepoModelQuizQuizResponse {
  id?: number;
  quizId?: number;
  createdBy?: string;
  createdOn?: string;
  /**
   * The list of responses to the questions in the Quiz
   */
  questionResponses?: Array<OrgSagebionetworksRepoModelQuizQuestionResponse>;
}