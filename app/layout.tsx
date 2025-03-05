import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import ContactForm from "@/components/shared/contact-form";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | NMTC, Kumasi",
    absolute: "NMTC, Kumasi",
  },
  description:
    "The Kumasi Nurses' Training College, now Kumasi Nursing and Midwifery Training College is public tertiary health institution in Kumasi in the Ashanti Region of Ghana. The college is in the Kumasi Metropolitan Assembly. The school is located at the premises of the Komfo Anokye Teaching Hospital, Kumasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
          <ContactForm />
        </main>
        <Footer />
      </body>
    </html>
  );
}
