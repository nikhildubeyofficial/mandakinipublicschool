"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileCheck, FileText, CreditCard, Send } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const steps = [
  { icon: FileCheck, title: "Fill form", desc: "Submit the online admission form." },
  { icon: FileText, title: "Documents", desc: "Upload required documents." },
  { icon: CreditCard, title: "Fee", desc: "Complete fee payment as per structure." },
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Admissions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Open for the academic year. Apply online below.
          </motion.p>
        </div>
      </section>

      <Section title="Admission Process" subtitle="Simple steps to join us.">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Eligibility & Documents" subtitle="What you need." className="bg-muted/30">
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-poppins font-semibold text-foreground mb-3">Eligibility</h4>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Age as per class (refer to school policy)</li>
                <li>Previous school records (if applicable)</li>
                <li>Transfer certificate for class II onwards</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-poppins font-semibold text-foreground mb-3">Required Documents</h4>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Birth certificate</li>
                <li>Passport-size photographs</li>
                <li>Previous academic records</li>
                <li>Guardian ID proof</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Online Admission Form" subtitle="Submit your application.">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          {submitted ? (
            <Card>
              <CardContent className="p-10 text-center">
                <p className="text-lg text-foreground font-medium">Thank you! Your application has been submitted.</p>
                <p className="text-muted-foreground mt-2">We will contact you shortly.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 md:p-8">
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setError("");
                    setLoading(true);
                    const fd = new FormData(e.currentTarget);
                    const res = await fetch("/api/admissions", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        studentName: fd.get("studentName"),
                        class: fd.get("class"),
                        dob: fd.get("dob") || null,
                        guardianName: fd.get("guardianName"),
                        guardianPhone: fd.get("guardianPhone"),
                        guardianEmail: fd.get("email") || null,
                        address: fd.get("address") || null,
                        previousSchool: fd.get("previousSchool") || null,
                      }),
                    });
                    const data = await res.json();
                    setLoading(false);
                    if (res.ok) setSubmitted(true);
                    else setError(data.error || "Failed to submit");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input id="studentName" name="studentName" required placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="class">Class Applying For *</Label>
                      <Input id="class" name="class" required placeholder="e.g. Class 1" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" name="dob" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guardianName">Guardian Name *</Label>
                      <Input id="guardianName" name="guardianName" required placeholder="Guardian name" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Guardian Phone *</Label>
                      <Input id="phone" name="phone" required type="tel" placeholder="10-digit mobile" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Guardian Email</Label>
                      <Input id="email" name="email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" name="address" placeholder="Full address" rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousSchool">Previous School (if applicable)</Label>
                    <Input id="previousSchool" name="previousSchool" placeholder="Previous school name" />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
                    <Send className="h-4 w-4" />
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </Section>

      <Section title="Fee Structure" subtitle="Transparent and affordable." className="bg-muted/30">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <p className="text-muted-foreground text-center">
              Fee structure is shared at the time of admission. For detailed fee breakdown, please visit the school office or contact us.
            </p>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <a href="/contact">Contact for Fee Details</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
