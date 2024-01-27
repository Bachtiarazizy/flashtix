import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DropdownComponentProps {
  label: string;
  items: string[];
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ label, items }) => {
  return (
    <div className="flex py-4 px-6  hover:border">
      <DropdownMenu>
        <DropdownMenuTrigger>{label}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items.map((item, index) => (
            <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownComponent;
