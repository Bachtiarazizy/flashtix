import React from "react";

export default function ClerkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex items-center min-h-screen w-full bg-purple-50 bg-dotted-pattern bg-cover bg-fixed bg-center justify-center">{children}</div>;
}
