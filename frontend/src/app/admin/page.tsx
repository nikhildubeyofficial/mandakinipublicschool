import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AdminLogin } from "@/components/admin/admin-login";

export default async function AdminPage() {
  const session = await auth();
  if (session?.user) redirect("/admin/dashboard");
  return <AdminLogin />;
}
