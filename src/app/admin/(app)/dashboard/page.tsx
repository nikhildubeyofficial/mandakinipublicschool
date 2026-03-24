"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Newspaper, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { key: "students", label: "Total Students", icon: Users, color: "bg-blue-500/10 text-blue-600" },
  { key: "teachers", label: "Total Teachers", icon: GraduationCap, color: "bg-green-500/10 text-green-600" },
  { key: "news", label: "News Posts", icon: Newspaper, color: "bg-amber-500/10 text-amber-600" },
  { key: "events", label: "Upcoming Events", icon: Calendar, color: "bg-purple-500/10 text-purple-600" },
];

export default function AdminDashboardPage() {
  const [counts, setCounts] = useState({ students: 0, teachers: 0, news: 0, events: 0 });

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setCounts(data);
        }
      })
      .catch((err) => console.error("Failed to fetch counts:", err));
  }, []);

  return (
    <div>
      <h1 className="font-poppins text-2xl font-bold text-foreground mb-8">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{counts[item.key as keyof typeof counts]}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Welcome to the admin panel. Use the sidebar to manage students, teachers, admissions, gallery, news, events, and downloads.
              Changes will reflect on the public website.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
