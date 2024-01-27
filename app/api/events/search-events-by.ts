import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchEvents = async (location: string, category: string) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        OR: [
          {
            location: {
              contains: location,
            },
          },
          {
            category: {
              contains: category,
            },
          },
        ],
      },
      include: {
        organizer: true,
        attendees: true,
        reviews: true,
        promotions: true,
      },
    });
    return events;
  } catch (error) {
    console.error("Gagal mencari acara:", error);
    throw new Error("Gagal mencari acara");
  }
};
