"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="font-poppins text-2xl font-bold text-foreground mb-8">Website Settings</h1>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-6">
            Configure website content, contact details, and other settings. (Settings management can be extended with the database settings table.)
          </p>
          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}
