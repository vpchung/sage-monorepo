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
import { OrgSagebionetworksRepoModelSchemaJsonSchemaVersionInfo } from './orgSagebionetworksRepoModelSchemaJsonSchemaVersionInfo';

/**
 * Describes the binding of a JSON schema to an object
 */
export interface OrgSagebionetworksRepoModelSchemaJsonSchemaObjectBinding {
  jsonSchemaVersionInfo?: OrgSagebionetworksRepoModelSchemaJsonSchemaVersionInfo;
  objectId?: number;
  objectType?: string;
  createdOn?: string;
  createdBy?: string;
  enableDerivedAnnotations?: boolean;
}
