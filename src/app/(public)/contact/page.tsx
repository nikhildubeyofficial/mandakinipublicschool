"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Get in touch. We&apos;re here to help.
          </motion.p>
        </div>
      </section>

      <Section title="Get in Touch" subtitle="Reach us by phone, email, or visit.">
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground mt-1">Mandakini Public School<br />Mau, Uttar Pradesh, India</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <Card className="h-full">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground mt-1"><a href="tel:+91XXXXXXXXXX" className="hover:text-primary">+91 XXXXX XXXXX</a></p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground mt-1"><a href="mailto:info@mandakinipublicschool.edu.in" className="hover:text-primary">info@mandakinipublicschool.edu.in</a></p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section title="Send a Message" subtitle="Fill the form and we'll get back to you." className="bg-muted/30">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <Card>
              <CardContent className="p-10 text-center">
                <p className="text-lg font-medium text-foreground">Thank you! Your message has been sent.</p>
                <p className="text-muted-foreground mt-2">We will respond shortly.</p>
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
                    const form = e.currentTarget;
                    const fd = new FormData(form);
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: fd.get("name"),
                        email: fd.get("email"),
                        phone: fd.get("phone"),
                        subject: fd.get("subject"),
                        message: fd.get("message"),
                      }),
                    });
                    const data = await res.json();
                    setLoading(false);
                    if (res.ok) setSubmitted(true);
                    else setError(data.error || "Failed to send");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" required placeholder="Your message" rows={5} />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
                    <Send className="h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>

      <Section title="Location" subtitle="Find us on the map.">
        <Card className="overflow-hidden">
          <div className="aspect-[21/9] w-full bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground p-8">
              <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Google Map integration: Add your embed or API key for live map.</p>
              <p className="text-sm mt-2">Mau, Uttar Pradesh, India</p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
