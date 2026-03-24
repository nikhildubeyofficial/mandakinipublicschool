"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Academics",
    children: [
      { href: "/academics", label: "Overview" },
      { href: "/academics#curriculum", label: "Curriculum" },
      { href: "/academics#departments", label: "Departments" },
    ],
  },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events & News" },
  { href: "/contact", label: "Contact" },
  {
    label: "More",
    children: [
      { href: "/student-corner", label: "Student Corner" },
      { href: "/teachers", label: "Teachers" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="font-poppins text-xl font-bold text-foreground">
            Mandakini Public School
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            "href" in item ? (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "font-medium",
                    isActive(item.href) && "bg-primary/10 text-primary"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ) : (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Button variant="ghost" size="sm" className="font-medium gap-1">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute left-0 top-full pt-1"
                    >
                      <div className="rounded-lg border border-border bg-card shadow-soft-lg p-1 min-w-[180px]">
                        {item.children?.map((child) => (
                          <Link key={child.href} href={child.href}>
                            <div className="rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors">
                              {child.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Link href="/admissions" className="hidden sm:inline-flex">
            <Button size="sm">Admissions</Button>
          </Link>
          <Link href="/admin" className="hidden sm:inline-flex">
            <Button variant="outline" size="sm">
              Admin
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="container flex flex-col gap-4 pt-20 px-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              {navItems.map((item) =>
                "href" in item ? (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                    <span
                      className={cn(
                        "block py-2 text-lg font-medium",
                        isActive(item.href) && "text-primary"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <div key={item.label}>
                    <span className="block py-2 text-lg font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    <div className="pl-4 flex flex-col gap-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="block py-1.5 text-foreground">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
              <div className="flex gap-2 pt-4">
                <Link href="/admissions" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Admissions</Button>
                </Link>
                <Link href="/admin" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">Admin</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
