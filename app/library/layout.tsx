import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Library",
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
