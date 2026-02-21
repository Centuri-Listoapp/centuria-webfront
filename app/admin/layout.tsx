export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>centuria</header>
      <main>{children}</main>
    </>
    
  );
}
