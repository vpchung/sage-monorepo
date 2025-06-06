/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelQuizQuestion } from './orgSagebionetworksRepoModelQuizQuestion';

/**
 * Schema for a quiz and, optionally, its answer key
 */
export interface OrgSagebionetworksRepoModelQuizQuiz {
  id?: number;
  header?: string;
  /**
   * The questions in the Quiz
   */
  questions?: Array<OrgSagebionetworksRepoModelQuizQuestion>;
}
