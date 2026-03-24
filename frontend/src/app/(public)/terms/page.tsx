import { Section } from "@/components/layout/section";

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-poppins text-4xl font-bold text-foreground md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <p className="text-muted-foreground">
            By using this website, you agree to these terms. The content on this site is for informational purposes. Mandakini Public School Mau reserves the right to update content without notice. For admissions and other policies, please contact the school directly.
          </p>
        </div>
      </Section>
    </>
  );
}
