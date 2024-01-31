import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ToastProvider } from "@/components/shared/providers/toaster-provider";
import { ConfettiProvider } from "@/components/shared/providers/confetti-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Flashtix",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
