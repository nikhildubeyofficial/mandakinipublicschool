"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminGalleryPage() {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setAlbums(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-poppins text-2xl font-bold text-foreground">Manage Gallery</h1>
        <Button>Add Album</Button>
      </div>
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : albums.length === 0 ? (
            <p className="text-muted-foreground">No albums yet. Create an album and add images.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {albums.map((a) => (
                <div key={a.id} className="rounded-lg border border-border p-4">
                  <div className="aspect-video bg-muted rounded-lg mb-3" />
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-muted-foreground">{a.is_published ? "Published" : "Draft"}</p>
                  <div className="mt-2 flex gap-2">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Images</Button>
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
