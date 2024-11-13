import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

const Text = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="gap">Size</Label>
          <Input type="number" id="gap" placeholder="gap" />
        </div>
        <div className="flex-1 flex flex-col">
          <Label htmlFor="width">Weight</Label>
          <Select >
            <SelectTrigger className="flex-1 bg-red-400">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="width">Color</Label>
          <Input type="number" id="gap" placeholder="gap" />
        </div>
        <div className="flex-1 bg-purple-500">
          <Label htmlFor="gap">TextAlign</Label>
          <Select>
            <SelectTrigger className="w-full h- bg-green-500">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Text;
