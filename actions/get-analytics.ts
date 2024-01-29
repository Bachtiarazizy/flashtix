import { db } from "@/lib/db";
import { Event, Purchase } from "@prisma/client";

type PurchaseWithEvent = Purchase & {
  event: Event;
};

const groupByEvent = (purchases: PurchaseWithEvent[]) => {
  const grouped: { [eventTitle: string]: number } = {};

  purchases.forEach((purchase) => {
    const eventTitle = purchase.event.title;
    if (!grouped[eventTitle]) {
      grouped[eventTitle] = 0;
    }
    grouped[eventTitle] += purchase.event.price!;
  });

  return grouped;
};

export const getAnalytics = async (userId: string) => {
  try {
    const purchases = await db.purchase.findMany({
      where: {
        event: {
          userId: userId,
        },
      },
      include: {
        event: true,
      },
    });

    const groupedEarnings = groupByEvent(purchases);
    const data = Object.entries(groupedEarnings).map(([eventTitle, total]) => ({
      name: eventTitle,
      total: total,
    }));

    const totalRevenue = data.reduce((acc, curr) => acc + curr.total, 0);
    const totalSales = purchases.length;

    return {
      data,
      totalRevenue,
      totalSales,
    };
  } catch (error) {
    console.log("[GET_ANALYTICS]", error);
    return {
      data: [],
      totalRevenue: 0,
      totalSales: 0,
    };
  }
};
