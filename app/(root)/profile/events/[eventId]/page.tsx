import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CircleDollarSign, File, LayoutDashboard, ListChecks } from "lucide-react";

import { db } from "@/lib/db";

import { IconBadge } from "@/components/ui/icon-badge";
import { TitleForm } from "../_components/title-form";
import { DescriptionForm } from "../_components/description-form";
import { ImageForm } from "../_components/image-form";
import { CategoryForm } from "../_components/category-form";
import { PriceForm } from "../_components/price-form";
import { Actions } from "../_components/actions";
import { Banner } from "@/components/banner";

const EventIdPage = async ({ params }: { params: { eventId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const event = await db.event.findUnique({
    where: {
      id: params.eventId,
      userId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!event) {
    return redirect("/");
  }

  const requiredFields = [event.title, event.description, event.imageUrl, event.price, event.categoryId, event.chapters.some((chapter) => chapter.isPublished)];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!event.isPublished && <Banner label="This event is unpublished. It will not be visible to the students." />}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">event setup</h1>
            <span className="text-sm text-slate-700">Complete all fields {completionText}</span>
          </div>
          <Actions disabled={!isComplete} eventId={params.eventId} isPublished={event.isPublished} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your event</h2>
            </div>
            <TitleForm initialData={event} eventId={event.id} />
            <DescriptionForm initialData={event} eventId={event.id} />
            <ImageForm initialData={event} eventId={event.id} />
            <CategoryForm
              initialData={event}
              eventId={event.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">Sell your event</h2>
              </div>
              <PriceForm initialData={event} eventId={event.id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl">Resources & Attachments</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventIdPage;
