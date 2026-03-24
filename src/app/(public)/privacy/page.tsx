import { Section } from "@/components/layout/section";

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-poppins text-4xl font-bold text-foreground md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <p className="text-muted-foreground">
            Mandakini Public School Mau is committed to protecting your privacy. We collect information you provide through our contact and admission forms to respond to your inquiries and process applications. We do not share your data with third parties without consent. For questions, contact us at info@mandakinipublicschool.edu.in.
          </p>
        </div>
      </Section>
    </>
  );
}
