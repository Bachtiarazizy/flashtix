import { CreateEventInput } from "@/types/types";
import { PrismaClient, Event, User, Review, Promotion } from "@prisma/client";

const prisma = new PrismaClient();

export const updateEventById = async (eventId: number, eventData: CreateEventInput): Promise<Event> => {
  try {
    const updatedEvent = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: eventData,
      include: {
        organizer: true,
        attendees: true,
        reviews: true,
        promotions: true,
      },
    });
    return updatedEvent;
  } catch (error) {
    console.error("Gagal memperbarui acara by ID:", error);
    throw new Error("Gagal memperbarui acara by ID");
  }
};
