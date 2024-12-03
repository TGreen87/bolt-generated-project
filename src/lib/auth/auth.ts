/**
 * Authentication utilities and middleware
 */
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Permission, User } from '@/types/auth';

/**
 * Checks if user has required permissions
 */
export function hasPermission(user: User, permission: Permission): boolean {
  return user.permissions.includes(permission);
}

/**
 * Server-side authentication check
 */
export async function requireAuth() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  return session;
}
