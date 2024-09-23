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
import { OrgSagebionetworksRepoModelRestrictableObjectDescriptor } from './orgSagebionetworksRepoModelRestrictableObjectDescriptor';

/**
 * JSON schema for in-Synapse \'Access Control Team\' controlled Access Requirement, a \'tier 3\' Access Requirement. This access requirement allows the ACT managing the detail requirements, and submissions within Synapse.
 */
export interface OrgSagebionetworksRepoModelManagedACTAccessRequirement {
  versionNumber?: number;
  id?: number;
  description?: string;
  name?: string;
  etag?: string;
  createdOn?: string;
  modifiedOn?: string;
  createdBy?: string;
  modifiedBy?: string;
  subjectsDefinedByAnnotations?: boolean;
  /**
   * The IDs of the items controlled by this Access Requirement when \'subjectsDefinedByAnnotations=false\'. This property is mutually exclusive with \'subjectsDefinedByAnnotations\'.  When \'subjectsDefinedByAnnotations=true\' then this property must be empty or excluded.  Required when creating or updating and \'subjectsDefinedByAnnotations=false\' or \'subjectsDefinedByAnnotations\' is excluded.
   */
  subjectIds?: Array<OrgSagebionetworksRepoModelRestrictableObjectDescriptor>;
  accessType?: string;
  concreteType: OrgSagebionetworksRepoModelManagedACTAccessRequirement.ConcreteTypeEnum;
  isCertifiedUserRequired?: boolean;
  isValidatedProfileRequired?: boolean;
  isDUCRequired?: boolean;
  ducTemplateFileHandleId?: string;
  isIRBApprovalRequired?: boolean;
  areOtherAttachmentsRequired?: boolean;
  expirationPeriod?: number;
  isIDUPublic?: boolean;
  isIDURequired?: boolean;
  isTwoFaRequired?: boolean;
}
export namespace OrgSagebionetworksRepoModelManagedACTAccessRequirement {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelManagedActAccessRequirement:
      'org.sagebionetworks.repo.model.ManagedACTAccessRequirement' as ConcreteTypeEnum,
  };
}
