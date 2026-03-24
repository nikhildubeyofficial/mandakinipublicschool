"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminAdmissionsPage() {
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/admissions")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setAdmissions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="font-poppins text-2xl font-bold text-foreground mb-8">Manage Admissions</h1>
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : admissions.length === 0 ? (
            <p className="text-muted-foreground">No admission applications yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Student</th>
                    <th className="text-left py-3 px-4">Class</th>
                    <th className="text-left py-3 px-4">Guardian</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admissions.map((a) => (
                    <tr key={a.id} className="border-b border-border">
                      <td className="py-3 px-4">{a.student_name}</td>
                      <td className="py-3 px-4">{a.class_applying}</td>
                      <td className="py-3 px-4">{a.guardian_name} ({a.guardian_phone})</td>
                      <td className="py-3 px-4">
                        <span className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          a.status === "approved" && "bg-green-100 text-green-700 dark:bg-green-900/30",
                          a.status === "rejected" && "bg-red-100 text-red-700 dark:bg-red-900/30",
                          a.status === "pending" && "bg-amber-100 text-amber-700 dark:bg-amber-900/30"
                        )}>
                          {a.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{new Date(a.created_at).toLocaleDateString()}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Approve</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Reject</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
