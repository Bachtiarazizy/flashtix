import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
}
