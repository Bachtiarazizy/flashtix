import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function DELETE(req: Request, { params }: { params: { eventId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await db.event.findUnique({
      where: {
        id: params.eventId,
        userId: userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!event) {
      return new NextResponse("Not found", { status: 404 });
    }

    const deletedEvent = await db.event.delete({
      where: {
        id: params.eventId,
      },
    });

    return NextResponse.json(deletedEvent);
  } catch (error) {
    console.log("[event_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { eventId: string } }) {
  try {
    const { userId } = auth();
    const { eventId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await db.event.update({
      where: {
        id: eventId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.log("[event_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
