import { auth } from "@clerk/nextjs";
import { Chapter, Event, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { EventSidebarItem } from "./event-sidebar-item";
import { EventProgress } from "@/components/shared/event-progress";

interface EventSidebarProps {
  event: Event & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const Eventsidebar = async ({ event, progressCount }: EventSidebarProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId: event.id,
      },
    },
  });

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{event.title}</h1>
        {purchase && (
          <div className="mt-10">
            <EventProgress variant="success" value={progressCount} />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {event.chapters.map((chapter) => (
          <EventSidebarItem key={chapter.id} id={chapter.id} label={chapter.title} isCompleted={!!chapter.userProgress?.[0]?.isCompleted} eventId={event.id} isLocked={!chapter.isFree && !purchase} />
        ))}
      </div>
    </div>
  );
};
