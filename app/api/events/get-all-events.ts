import { CreateEventInput } from "@/types/types";
import { PrismaClient, Event, User, Review, Promotion } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const events = await prisma.event.findMany({
      include: {
        organizer: true,
        attendees: true,
        reviews: true,
        promotions: true,
      },
    });
    return events;
  } catch (error) {
    console.error("Gagal mendapatkan semua acara:", error);
    throw new Error("Gagal mendapatkan semua acara");
  }
};
