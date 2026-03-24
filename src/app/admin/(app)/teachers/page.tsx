"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminTeachersPage() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/teachers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setTeachers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-poppins text-2xl font-bold text-foreground">Manage Teachers</h1>
        <Button>Add Teacher</Button>
      </div>
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : teachers.length === 0 ? (
            <p className="text-muted-foreground">No teachers added yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Designation</th>
                    <th className="text-left py-3 px-4">Subject</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((t) => (
                    <tr key={t.id} className="border-b border-border">
                      <td className="py-3 px-4">{t.name}</td>
                      <td className="py-3 px-4">{t.designation ?? "-"}</td>
                      <td className="py-3 px-4">{t.subject ?? "-"}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
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
