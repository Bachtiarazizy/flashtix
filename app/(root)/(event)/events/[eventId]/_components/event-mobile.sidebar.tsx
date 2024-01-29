import { Menu } from "lucide-react";
import { Chapter, Event, UserProgress } from "@prisma/client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Eventsidebar } from "./event-sidebar";

interface EventMobileSidebarProps {
  event: Event & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const EventMobileSidebar = ({ event, progressCount }: EventMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <Eventsidebar event={event} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  );
};
