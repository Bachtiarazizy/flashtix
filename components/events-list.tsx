import { Category, Event } from "@prisma/client";
import { EventCard } from "./event-card";

type EventWithProgressWithCategory = Event & {
  category: Category | null;
};

interface EventListProps {
  items: EventWithProgressWithCategory[];
}

export const EventList = ({ items }: EventListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <EventCard key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl!} price={item.price!} category={item?.category?.name!} />
        ))}
      </div>
      {items.length === 0 && <div className="text-center text-sm text-muted-foreground mt-10">No Events found</div>}
    </div>
  );
};
