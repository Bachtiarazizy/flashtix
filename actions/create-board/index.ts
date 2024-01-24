"use server";

import { auth } from "@clerk/nextjs";
// import { revalidatePath } from "next/cache";

// import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { InputType, ReturnType } from "./types";
import { CreateBoard } from "./schema";
// import { createAuditLog } from "@/lib/create-audit-log";
// import { ACTION, ENTITY_TYPE } from "@prisma/client";
// import { incrementAvailableCount, hasAvailableCount } from "@/lib/org-limit";
// import { checkSubscription } from "@/lib/subscription";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  // Your logic here for the case where userId exists

  // Assuming ReturnType is an object, you need to return something here
  return {
    // Your return object for the case where userId exists
  };
};

export const createBoard = createSafeAction(CreateBoard, handler);
