import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DropdownComponentProps {
  label: string;
  items: string[];
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ label, items }) => {
  return (
    <div className="flex py-4 px-6  hover:border-b-2 hover:border-white transition-all overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white">
          {label}
          <div className="transition-transform transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-white">{label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {items.map((item, index) => (
                <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </div>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
};

export default DropdownComponent;
