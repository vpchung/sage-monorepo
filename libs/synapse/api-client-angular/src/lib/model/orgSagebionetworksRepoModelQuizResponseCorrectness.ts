/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelQuizQuestionResponse } from './orgSagebionetworksRepoModelQuizQuestionResponse';
import { OrgSagebionetworksRepoModelQuizQuestion } from './orgSagebionetworksRepoModelQuizQuestion';

/**
 * A user response and whether it is correct.
 */
export interface OrgSagebionetworksRepoModelQuizResponseCorrectness {
  question?: OrgSagebionetworksRepoModelQuizQuestion;
  response?: OrgSagebionetworksRepoModelQuizQuestionResponse;
  isCorrect?: boolean;
}
