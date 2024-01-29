import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(req: Request, { params }: { params: { eventId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await db.event.findUnique({
      where: {
        id: params.eventId,
        userId,
      },
    });

    if (!event) {
      return new NextResponse("Not found", { status: 404 });
    }

    if (!event.title || !event.description || !event.categoryId) {
      return new NextResponse("Missing required fields", { status: 401 });
    }

    const publishedevent = await db.event.update({
      where: {
        id: params.eventId,
        userId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedevent);
  } catch (error) {
    console.log("[event_ID_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
