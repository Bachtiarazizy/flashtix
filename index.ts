import express, { Request, Response } from "express";
import { PrismaClient, Event, Ticket } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Rute untuk mendapatkan daftar event sesuai filter
app.get("/events", async (req: Request, res: Response) => {
  const { category, location } = req.query;
  let where: any = {};

  if (category) {
    where.category = category;
  }

  if (location) {
    where.location = location;
  }

  const events: Event[] = await prisma.event.findMany({ where });
  res.json(events);
});

// Rute untuk membuat event baru
app.post("/events", async (req, res) => {
  const { name, date, location, price } = req.body;

  try {
    const event: Event = await prisma.event.create({
      data: {
        name,
        date,
        location,
        price, // Include the 'price' property
      },
    });

    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/buy-ticket", async (req, res) => {
  const { eventId, userId, quantity, totalPrice } = req.body;

  try {
    const event: Event | null = await prisma.event.findUnique({ where: { id: eventId } });

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const { price } = event; // Extract the 'price' property from the 'event'

    const ticket: Ticket = await prisma.ticket.create({
      data: {
        eventId,
        userId,
        quantity,
        totalPrice,
        price, // Include the 'price' property
      },
    });

    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
