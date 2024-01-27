import express, { Request, Response } from "express";
import { PrismaClient, Event } from "@prisma/client";
import { CreateEventInput } from "@/types/types";

const prisma = new PrismaClient();
const router = express.Router();

export const createEvent = async (eventData: CreateEventInput): Promise<Event> => {
  try {
    const newEvent = await prisma.event.create({
      data: eventData,
    });
    return newEvent;
  } catch (error) {
    console.error("Gagal membuat acara:", error);
    throw new Error("Gagal membuat acara");
  }
};

router.use(express.json());

router.post("/events", async (req: Request, res: Response) => {
  const eventData: CreateEventInput = req.body;

  try {
    const newEvent = await createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
});

export default router;
