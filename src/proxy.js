import { NextResponse } from 'next/server'
import { use } from 'react';
import { AuthContext } from './context/AuthContext';

 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
       const { user, loading } = use(AuthContext);
      if (!user){
  return NextResponse.redirect(new URL('/Login', request.url))
      }
    return NextResponse.next();
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/ProductDetails/:path*',
}