// types.ts

export type User = {
  id: number;
  name?: string | null;
  email: string;
  events?: Event[];
  createdEvents?: Event[];
  reviews?: Review[];
};

export type Event = {
  id: number;
  name: string;
  price: number;
  date: Date;
  time: string;
  location: string;
  description: string;
  availableSeats: number;
  isFree: boolean;
  ticketTypes?: string | null;
  organizer: User;
  organizerId: number;
  attendees?: User[];
  reviews?: Review[];
  promotions?: Promotion[];
  category?: string | null; // Tambahkan properti category
};

export type Review = {
  id: number;
  overallRating: number;
  qualityRating: number;
  suggestions?: string | null;
  event: Event;
  eventId: number;
  reviewer: User;
  reviewerId: number;
};

export type Promotion = {
  id: number;
  discountAmount: number;
  availableSlots: number;
  referralCode: string;
  event: Event;
  eventId: number;
};

// Assuming Organizer is another model in your Prisma schema
// Assuming Organizer is another model in your Prisma schema
export type CreateEventInput = {
  name: string;
  price: number;
  date: Date;
  time: string;
  location: string;
  description: string;
  availableSeats: number;
  isFree: boolean;
  ticketTypes: string | null;
  organizer: {
    connect: {
      id: number; // You need to provide the organizer's ID here
    };
  };
  category: string | null;
  image: string | null;
};
