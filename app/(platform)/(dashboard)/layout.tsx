import DashboardNav from "./_components/DashboardNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <DashboardNav />
      {children}
    </div>
  );
}
