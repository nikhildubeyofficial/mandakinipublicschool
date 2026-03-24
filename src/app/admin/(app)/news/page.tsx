"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminNewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/news")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-poppins text-2xl font-bold text-foreground">Manage News</h1>
        <Button>Add News</Button>
      </div>
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : news.length === 0 ? (
            <p className="text-muted-foreground">No news posts yet.</p>
          ) : (
            <div className="space-y-4">
              {news.map((n) => (
                <div key={n.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium">{n.title}</p>
                    <p className="text-sm text-muted-foreground">{n.is_published ? "Published" : "Draft"}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
