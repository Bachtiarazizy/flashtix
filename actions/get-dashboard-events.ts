// import { Category, Event } from "@prisma/client";

// import { db } from "@/lib/db";

// type EventWithoutChaptersAndProgress = Event & {
//   category: Category;
// };

// type EventDashboard = {
//   completedEvents: EventWithoutChaptersAndProgress[];
//   eventsInProgress: EventWithoutChaptersAndProgress[];
// };

// export const getEventDashboard = async (userId: string): Promise<EventDashboard> => {
//   try {
//     const purchasedEvents = await db.purchase.findMany({
//       where: {
//         userId: userId,
//       },
//       select: {
//         event: {
//           include: {
//             category: true,
//           },
//         },
//       },
//     });

//     const events = purchasedEvents.map((purchase) => purchase.event) as EventWithoutChaptersAndProgress[];

//     return {
//       completedEvents: events.filter((event) => event.progress === 100),
//       eventsInProgress: events.filter((event) => (event.progress ?? 0) < 100),
//     };
//   } catch (error) {
//     console.log("[GET_DASHBOARD_events]", error);
//     return {
//       completedEvents: [],
//       eventsInProgress: [],
//     };
//   }
// };
