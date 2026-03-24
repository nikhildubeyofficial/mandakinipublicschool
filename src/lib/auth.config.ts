import type { NextAuthConfig } from "next-auth";

// This is the Edge-compatible part of the auth configuration
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");
      
      // Protect admin pages - require login
      if (isAdminPage) {
        if (isLoggedIn) return true;
        return false; // Redirect to /admin/login
      }
      
      // Allow access to all other pages
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [], // Providers are added in the full auth.ts which runs in Node.js
};
