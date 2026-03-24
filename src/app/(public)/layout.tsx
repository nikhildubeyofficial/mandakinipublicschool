import { PublicLayout } from "@/components/layout/public-layout";

export default function PublicPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLayout>{children}</PublicLayout>;
}
