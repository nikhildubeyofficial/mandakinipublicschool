import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// In production, fetch by slug from the database
const placeholderPosts: Record<string, { title: string; date: string; content: string }> = {
  "annual-day-2025": { title: "Annual Day 2025 – Save the Date", date: "Mar 1, 2025", content: "We are delighted to announce our Annual Day celebration. Please save the date and join us for a memorable evening of performances and awards." },
  "smart-classrooms": { title: "New Smart Classrooms Inaugurated", date: "Feb 28, 2025", content: "State-of-the-art smart classrooms have been set up to enhance digital learning. Each room is equipped with interactive boards and high-speed connectivity." },
  "sports-meet-results": { title: "Sports Meet Results", date: "Feb 20, 2025", content: "Congratulations to all participants and winners of the annual sports meet. We are proud of every student who took part." },
};

export default async function EventSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  if (!post) notFound();

  return (
    <>
      <section className="pt-24 pb-8 md:pt-28">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/events">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Events & News
            </Button>
          </Link>
          <article className="max-w-3xl mx-auto">
            <h1 className="font-poppins text-3xl font-bold text-foreground md:text-4xl">{post.title}</h1>
            <p className="text-muted-foreground mt-2">{post.date}</p>
            <div className="mt-8 prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">{post.content}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
