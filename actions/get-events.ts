import { Category, Event } from "@prisma/client";
import { db } from "@/lib/db";

type EventWithCategory = Event & {
  category: Category | null;
};

type GetEvents = {
  userId: string;
  title?: string;
  categoryId?: string;
};

export const getEvents = async ({ userId, title, categoryId }: GetEvents): Promise<EventWithCategory[]> => {
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

    return events;
  } catch (error) {
    console.log("[GET_eventS]", error);
    return [];
  }
};
