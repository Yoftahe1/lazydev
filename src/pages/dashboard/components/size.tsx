import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const Size = () => {
  return (
    <div className="flex gap-4">
      <div>
        <Label htmlFor="width">Width</Label>
        <Input type="number" id="width" placeholder="width" />
      </div>
      <div>
        <Label htmlFor="height">Height</Label>
        <Input type="number" id="height" placeholder="height" />
      </div>
    </div>
  );
};

export default Size;
