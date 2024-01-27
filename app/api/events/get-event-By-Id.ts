import { CreateEventInput } from "@/types/types";
import { PrismaClient, Event, User, Review, Promotion } from "@prisma/client";

const prisma = new PrismaClient();

export const getEventById = async (eventId: number): Promise<Event | null> => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        organizer: true,
        attendees: true,
        reviews: true,
        promotions: true,
      },
    });
    return event;
  } catch (error) {
    console.error("Gagal mendapatkan acara by ID:", error);
    throw new Error("Gagal mendapatkan acara by ID");
  }
};
