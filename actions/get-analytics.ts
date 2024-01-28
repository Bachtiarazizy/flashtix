import { db } from "@/lib/db";
import { Event, Purchase } from "@prisma/client";

type PurchaseWithCourse = Purchase & {
  event: Event;
};

const groupByCourse = (purchases: PurchaseWithCourse[]) => {
  const grouped: { [eventTitle: string]: number } = {};

  purchases.forEach((purchase) => {
    const courseTitle = purchase.event.title;
    if (!grouped[courseTitle]) {
      grouped[courseTitle] = 0;
    }
    grouped[courseTitle] += purchase.event.price!;
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

    const groupedEarnings = groupByCourse(purchases);
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
