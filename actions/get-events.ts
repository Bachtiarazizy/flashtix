import { Category, Event } from "@prisma/client";

import { db } from "@/lib/db";

type EeventWithProgressWithCategory = Event & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type getEvent = {
  userId: string;
  title?: string;
  categoryId?: string;
};

export const getEvent = async ({ userId, title, categoryId }: getEvent): Promise<EeventWithProgressWithCategory[]> => {
  try {
    const events = await db.event.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
        purchases: {
          where: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const eventWithProgress: EeventWithProgressWithCategory[] = await Promise.all(
      events.map(async (event) => {
        if (event.purchases.length === 0) {
          return {
            ...event,
            progress: null,
          };
        }

        const progressPercentage = await getProgress(userId, event.id);

        return {
          ...event,
          progress: progressPercentage,
        };
      })
    );

    return eventWithProgress;
  } catch (error) {
    console.log("[GET_events]", error);
    return [];
  }
};
