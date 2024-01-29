import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const EventIdPage = async ({ params }: { params: { eventId: string } }) => {
  const event = await db.event.findUnique({
    where: {
      id: params.eventId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!event) {
    return redirect("/");
  }

  return redirect(`/events/${event.id}/chapters/${event.chapters[0].id}`);
};

export default EventIdPage;
