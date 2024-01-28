import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { Request, Response } from "express";
import { CreateEventInput } from "./types/types";
import { createEvent } from "./app/api/events/create-events";
import { deleteEventById } from "./app/api/events/delete-events-by-Id";
import { getAllEvents } from "./app/api/events/get-all-events";
import { updateEventById } from "./app/api/events/update-event-By-Id";
import { getEventById } from "./app/api/events/get-event-By-Id";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/events", async (req: Request, res: Response) => {
  const eventData: CreateEventInput = req.body;

  try {
    const newEvent = await createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
});

app.delete("/events/:eventId", async (req, res) => {
  const eventId = parseInt(req.params.eventId, 10);

  try {
    const deletedEvent = await deleteEventById(eventId);

    if (deletedEvent) {
      res.status(200).json(deletedEvent);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error deleting event by ID:", error);
    res.status(500).json({ error: "Failed to delete event by ID" });
  }
});

app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.get("/events/:eventId", async (req, res) => {
  const eventId = parseInt(req.params.eventId, 10);

  try {
    const event = await getEventById(eventId);

    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    res.status(500).json({ error: "Failed to fetch event by ID" });
  }
});

app.put("/events/:eventId", async (req, res) => {
  const eventId = parseInt(req.params.eventId, 10);
  const eventData = req.body; // pastikan data yang dikirimkan dalam format yang sesuai dengan CreateEventInput

  try {
    const updatedEvent = await updateEventById(eventId, eventData);

    if (updatedEvent) {
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error updating event by ID:", error);
    res.status(500).json({ error: "Failed to update event by ID" });
  }
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
