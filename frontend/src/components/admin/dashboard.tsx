"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Newspaper, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AdminDashboard() {
  const [stats, setStats] = useState({ students: 0, teachers: 0, news: 0, events: 0 });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    }
    fetchStats();
  }, []);

  const items = [
    { label: "Total Students", value: stats.students, icon: Users, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
    { label: "Total Teachers", value: stats.teachers, icon: GraduationCap, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
    { label: "News Posts", value: stats.news, icon: Newspaper, color: "bg-green-500/10 text-green-600 dark:text-green-400" },
    { label: "Events", value: stats.events, icon: Calendar, color: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
  ];

  return (
    <div>
      <h1 className="font-poppins text-2xl font-bold text-foreground mb-8">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
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
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
