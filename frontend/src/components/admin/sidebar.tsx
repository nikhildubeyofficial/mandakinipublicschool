"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileCheck,
  Images,
  Newspaper,
  Calendar,
  FileDown,
  Settings,
  LogOut,
  School,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/teachers", label: "Teachers", icon: GraduationCap },
  { href: "/admin/admissions", label: "Admissions", icon: FileCheck },
  { href: "/admin/gallery", label: "Gallery", icon: Images },
  { href: "/admin/news", label: "News", icon: Newspaper },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/downloads", label: "Downloads", icon: FileDown },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card hidden lg:block">
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <School className="h-8 w-8 text-primary" />
        <span className="font-poppins font-semibold">Admin</span>
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href}>
            <span
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </span>
          </Link>
        ))}
        <div className="mt-auto pt-4">
          <Link href="/" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
            View Website
          </Link>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </nav>
    </aside>
  );
}
