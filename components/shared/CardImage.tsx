import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CardImageComponentProps {
  title: string;
  date: string;
  time: string;
  price: string;
  organizer: string;
  imageUrl: string;
}

const CardImageComponent: React.FC<CardImageComponentProps> = ({ title, date, time, price, organizer, imageUrl }) => {
  return (
    <Card className="w-96 h-52 relative overflow-hidden transition duration-300 transform hover:scale-105">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Date: {date}</CardDescription>
        <CardDescription>Time: {time}</CardDescription>
      </CardHeader>
      <CardContent className="absolute top-0 left-0 right-0 bottom-0">
        <div className="h-full flex items-end justify-end">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <CardTitle>{title}</CardTitle>
            <CardFooter className="bg-white bg-opacity-75 p-4">
              <p className="text-lg font-semibold mb-2 text-black">Price: {price}</p>
            </CardFooter>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardImageComponent;
