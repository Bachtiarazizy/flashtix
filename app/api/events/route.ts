// import express from "express";
// import { createEvent } from "./create-events"; //
// import { CreateEventInput } from "@/types/types"; //
// import { deleteEventById } from "./delete-events-by-Id";
// import { getAllEvents } from "./get-all-events";
// import { getEventById } from "./get-event-By-Id";
// import { updateEventById } from "./update-event-By-Id";

// const router = express.Router();
// router.use(express.json());

// router.post("/events", async (req, res) => {
//   const eventData: CreateEventInput = req.body;

//   try {
//     const newEvent = await createEvent(eventData);
//     res.status(201).json(newEvent);
//   } catch (error) {
//     console.error("Error creating event:", error);
//     res.status(500).json({ error: "Failed to create event" });
//   }
// });

// router.delete("/events/:eventId", async (req, res) => {
//   const eventId = parseInt(req.params.eventId, 10);

//   try {
//     const deletedEvent = await deleteEventById(eventId);

//     if (deletedEvent) {
//       res.status(200).json(deletedEvent);
//     } else {
//       res.status(404).json({ error: "Event not found" });
//     }
//   } catch (error) {
//     console.error("Error deleting event by ID:", error);
//     res.status(500).json({ error: "Failed to delete event by ID" });
//   }
// });

// router.get("/events", async (req, res) => {
//   try {
//     const events = await getAllEvents();
//     res.status(200).json(events);
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     res.status(500).json({ error: "Failed to fetch events" });
//   }
// });

// router.get("/events/:eventId", async (req, res) => {
//   const eventId = parseInt(req.params.eventId, 10);

//   try {
//     const event = await getEventById(eventId);

//     if (event) {
//       res.status(200).json(event);
//     } else {
//       res.status(404).json({ error: "Event not found" });
//     }
//   } catch (error) {
//     console.error("Error fetching event by ID:", error);
//     res.status(500).json({ error: "Failed to fetch event by ID" });
//   }
// });

// router.put("/events/:eventId", async (req, res) => {
//   const eventId = parseInt(req.params.eventId, 10);
//   const eventData = req.body; // pastikan data yang dikirimkan dalam format yang sesuai dengan CreateEventInput

//   try {
//     const updatedEvent = await updateEventById(eventId, eventData);

//     if (updatedEvent) {
//       res.status(200).json(updatedEvent);
//     } else {
//       res.status(404).json({ error: "Event not found" });
//     }
//   } catch (error) {
//     console.error("Error updating event by ID:", error);
//     res.status(500).json({ error: "Failed to update event by ID" });
//   }
// });

// export default router;
