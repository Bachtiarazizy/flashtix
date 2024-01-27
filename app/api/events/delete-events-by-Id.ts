import { CreateEventInput } from "@/types/types";
import { PrismaClient, Event, User, Review, Promotion } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteEventById = async (eventId: number): Promise<Event | null> => {
  try {
    const deletedEvent = await prisma.event.delete({
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
    return deletedEvent;
  } catch (error) {
    console.error("Gagal menghapus acara by ID:", error);
    throw new Error("Gagal menghapus acara by ID");
  }
};
