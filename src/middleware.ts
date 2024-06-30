import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {checkLoggedIn} from "@/app/ServerFunctions";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const isLoggedIn = await checkLoggedIn();
    if (!isLoggedIn && (request.url.includes("/account") || request.url.includes("/checkout"))) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (isLoggedIn && (request.url.includes("/login") || request.url.includes("/register"))) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/account/:path*', '/checkout/:path*', '/login', '/register']
}