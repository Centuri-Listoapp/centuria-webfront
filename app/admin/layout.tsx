import "./admin.css";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Header from "./candidates/components/Header";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = (await cookies()).get("auth")?.value;

  if (!auth) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main className="admin-container">{children}</main>
    </>
  );
}
