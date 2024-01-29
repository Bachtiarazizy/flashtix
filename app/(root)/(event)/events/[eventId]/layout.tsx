import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

import { EventSidebar } from "./_components/course-sidebar";
import { EventNavbar } from "./_components/course-navbar";

const EventsLayout = async ({ children, params }: { children: React.ReactNode; params: { eventId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const event = await db.event.findUnique({
    where: {
      id: params.eventId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!event) {
    return redirect("/");
  }

  const progressCount = await getProgress(userId, event.id);

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <EventNavbar event={event} progressCount={progressCount} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <EventSidebar event={event} progressCount={progressCount} />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default EventsLayout;
