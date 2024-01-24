import OrgControl from "./_components/org-control";

export default function OrganizationIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
