/**
 * Authentication and authorization types
 */

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE'
}

export enum Permission {
  VIEW_ORG = 'VIEW_ORG',
  EDIT_ORG = 'EDIT_ORG',
  MANAGE_USERS = 'MANAGE_USERS'
}

export interface Session {
  user: User;
  expires: string;
}
