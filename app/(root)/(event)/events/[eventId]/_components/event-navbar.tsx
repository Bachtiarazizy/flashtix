import { Chapter, Event, UserProgress } from "@prisma/client";

import { EventMobileSidebar } from "./event-mobile.sidebar";
import { NavbarRoutes } from "@/components/shared/navbar-routes";

interface EventNavbarProps {
  event: Event & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const eventNavbar = ({ event, progressCount }: EventNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <EventMobileSidebar event={event} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
