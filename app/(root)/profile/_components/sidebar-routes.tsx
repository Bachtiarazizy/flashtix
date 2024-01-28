"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: Layout,
    label: "My Event",
    href: "/profile/events",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/profile/search",
  },
  {
    icon: List,
    label: "Create event",
    href: "/profile/create-event",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/profile/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
