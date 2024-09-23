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
import { OrgSagebionetworksEvaluationModelSubmissionContributor } from './orgSagebionetworksEvaluationModelSubmissionContributor';

/**
 * A Submission to a Synapse Evaluation is a pointer to a versioned Entity. Submissions are immutable, so we archive a copy of the EntityBundle at the time of submission.
 */
export interface OrgSagebionetworksEvaluationModelSubmission {
  id?: string;
  userId?: string;
  submitterAlias?: string;
  evaluationId?: string;
  evaluationRoundId?: string;
  entityId?: string;
  entityBundleJSON?: string;
  versionNumber?: number;
  dockerRepositoryName?: string;
  dockerDigest?: string;
  name?: string;
  createdOn?: string;
  teamId?: string;
  /**
   * User ids of the submitter and (if a team submission) the team members involved in creating the submission.
   */
  contributors?: Set<OrgSagebionetworksEvaluationModelSubmissionContributor>;
}
