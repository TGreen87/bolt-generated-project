/**
 * AI service type definitions
 */

export interface AIRequest {
  command: string;
  context?: Record<string, any>;
}

export interface AIResponse {
  action: AIAction;
  data: Record<string, any>;
  confidence: number;
}

export enum AIAction {
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
  MOVE_EMPLOYEE = 'MOVE_EMPLOYEE',
  ADD_EMPLOYEE = 'ADD_EMPLOYEE',
  REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE'
}

export interface AIConfig {
  endpoint: string;
  apiKey: string;
  model: string;
  maxTokens: number;
}
