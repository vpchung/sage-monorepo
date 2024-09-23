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
 * The JSON schema is defined by: <a href=\"https://json-schema.org/\">json-schema.org</a>, specifically draft-07.  Only features listed here are currently supported.
 */
export interface OrgSagebionetworksRepoModelSchemaJsonSchema {
  $schema?: string;
  $id?: string;
  $ref?: string;
  type?: string;
  items?: OrgSagebionetworksRepoModelSchemaJsonSchema;
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.3.2.1\">properties</a>
   */
  properties?: { [key: string]: OrgSagebionetworksRepoModelSchemaJsonSchema };
  title?: string;
  description?: string;
  /**
   * Use allOf to \'extend\' or \'implement\' one or more schemas.  See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.2.1.1\">allOf</a>
   */
  allOf?: Array<OrgSagebionetworksRepoModelSchemaJsonSchema>;
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.2.1.2\">anyOf</a>
   */
  anyOf?: Array<OrgSagebionetworksRepoModelSchemaJsonSchema>;
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.2.1.3\">oneOf</a>
   */
  oneOf?: Array<OrgSagebionetworksRepoModelSchemaJsonSchema>;
  not?: OrgSagebionetworksRepoModelSchemaJsonSchema;
  format?: string;
  /**
   * In an effor to support draft-07 implementations, we are using \'definitions\' instead of \'$defs\'.  See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.appendix.A\">Appendix A</a>
   */
  definitions?: { [key: string]: OrgSagebionetworksRepoModelSchemaJsonSchema };
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.2\">enum</a>
   */
  _enum?: Array<any>;
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.3\">const</a>
   */
  _const?: any | null;
  source?: string;
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5.3\">required</a>
   */
  required?: Array<string>;
  maxLength?: number;
  minLength?: number;
  uniqueItems?: boolean;
  pattern?: string;
  _if?: OrgSagebionetworksRepoModelSchemaJsonSchema;
  then?: OrgSagebionetworksRepoModelSchemaJsonSchema;
  _else?: OrgSagebionetworksRepoModelSchemaJsonSchema;
  maximum?: number;
  minimum?: number;
  /**
   * See: <a href=\"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.2\">default</a>
   */
  _default?: any | null;
  contains?: OrgSagebionetworksRepoModelSchemaJsonSchema;
  additionalProperties?: OrgSagebionetworksRepoModelSchemaJsonSchema;
}
