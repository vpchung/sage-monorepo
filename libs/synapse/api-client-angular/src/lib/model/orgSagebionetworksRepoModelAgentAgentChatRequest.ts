/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Send a chat message to the Synapse chat agent
 */
export interface OrgSagebionetworksRepoModelAgentAgentChatRequest {
  concreteType: OrgSagebionetworksRepoModelAgentAgentChatRequest.ConcreteTypeEnum;
  sessionId?: string;
  chatText?: string;
}
export namespace OrgSagebionetworksRepoModelAgentAgentChatRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.agent.AgentChatRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelAgentAgentChatRequest:
      'org.sagebionetworks.repo.model.agent.AgentChatRequest' as ConcreteTypeEnum,
  };
}
