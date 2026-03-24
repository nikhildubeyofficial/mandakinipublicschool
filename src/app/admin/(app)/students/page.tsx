"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/students")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setStudents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-poppins text-2xl font-bold text-foreground">Manage Students</h1>
        <Button>Add Student</Button>
      </div>
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : students.length === 0 ? (
            <p className="text-muted-foreground">No students yet. Add students or import from admissions.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Class</th>
                    <th className="text-left py-3 px-4">Section</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="border-b border-border">
                      <td className="py-3 px-4">{s.name}</td>
                      <td className="py-3 px-4">{s.class ?? "-"}</td>
                      <td className="py-3 px-4">{s.section ?? "-"}</td>
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
