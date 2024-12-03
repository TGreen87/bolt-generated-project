import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { RateLimiter } from './lib/rate-limit';

/**
 * Global middleware configuration
 */
export async function middleware(request: NextRequest) {
  // Rate limiting
  const limiter = new RateLimiter();
  const { success } = await limiter.check(request);
  
  if (!success) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // CORS headers
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      headers: {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
