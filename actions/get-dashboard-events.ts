import { Category, Chapter, Event } from "@prisma/client";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

type EventWithProgressWithCategory = Event & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type EventDashboard = {
  completedEvents: EventWithProgressWithCategory[];
  eventsInProgress: EventWithProgressWithCategory[];
};

export const getEventDashboard = async (userId: string): Promise<EventDashboard> => {
  try {
    const purchasedEvents = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        event: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    });

    const events = purchasedEvents.map((purchase) => purchase.event) as EventWithProgressWithCategory[];

    for (let event of events) {
      const progress = await getProgress(userId, event.id);
      event["progress"] = progress;
    }

    const completedEvents = events.filter((event) => event.progress === 100);
    const eventsInProgress = events.filter((event) => (event.progress ?? 0) < 100);

    return {
      completedEvents,
      eventsInProgress,
    };
  } catch (error) {
    console.log("[GET_DASHBOARD_events]", error);
    return {
      completedEvents: [],
      eventsInProgress: [],
    };
  }
};
