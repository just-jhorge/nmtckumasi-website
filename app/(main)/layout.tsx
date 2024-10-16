import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-6.5rem)]">{children}</main>
      <Footer />
    </>
  );
}
