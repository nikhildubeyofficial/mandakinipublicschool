import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

// Absolute minimal config for the Edge runtime
const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");
      
      if (isAdminPage && !isLoggedIn) {
        return Response.redirect(new URL("/admin/login", nextUrl));
      }
      return true;
    },
  },
};

const { auth } = NextAuth(authConfig);

export default auth;

export const config = {
  matcher: ["/admin/:path*"], // Let's limit the protection to ONLY /admin routes for now
};
