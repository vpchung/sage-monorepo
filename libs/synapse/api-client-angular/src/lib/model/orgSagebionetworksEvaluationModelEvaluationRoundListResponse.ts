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
import { OrgSagebionetworksEvaluationModelEvaluationRound } from './orgSagebionetworksEvaluationModelEvaluationRound';

/**
 * A single page of the EvaluationRounds currently associated with an Evaluation
 */
export interface OrgSagebionetworksEvaluationModelEvaluationRoundListResponse {
  page?: Array<OrgSagebionetworksEvaluationModelEvaluationRound>;
  nextPageToken?: string;
}
