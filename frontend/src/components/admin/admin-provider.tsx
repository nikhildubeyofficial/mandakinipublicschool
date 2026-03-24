"use client";

import { createContext, useContext } from "react";
import { useSession, signOut as nextAuthSignOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

type AdminContextType = {
  user: { id: string; email: string; name?: string | null } | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AdminContext = createContext<AdminContextType | null>(null);

function AdminProviderInner({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const pathname = usePathname();

  const user = session?.user
    ? {
        id: session.user.id ?? "",
        email: session.user.email ?? "",
        name: session.user.name,
      }
    : null;

  useEffect(() => {
    if (loading) return;
    const isLoginPage = pathname === "/admin" || pathname === "/admin/login";
    if (!user && !isLoginPage) {
      router.replace("/admin/login");
    } else if (user && isLoginPage) {
      router.replace("/admin/dashboard");
    }
  }, [user, loading, pathname, router]);

  const signOut = async () => {
    await nextAuthSignOut({ redirect: false });
    router.replace("/admin/login");
  };

  return (
    <AdminContext.Provider value={{ user, loading, signOut }}>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-muted/30">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      ) : (
        children
      )}
    </AdminContext.Provider>
  );
}

export function AdminProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminProviderInner>{children}</AdminProviderInner>
    </SessionProvider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
