import ColorPicker from "@/components/color-picker";
import useNodeStore from "@/stores/nodes";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import getTag from "../function/get-tag";
import { Label } from "@/components/ui/label";

const Container = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { shadow, bgColor } = getTag(nodes, path);

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="bgColor">bg color</Label>
          <ColorPicker
            value={bgColor ? bgColor : "00000000"}
            onChange={(value) =>
              useNodeStore
                .getState()
                .changeValue("bgColor", value ? value : undefined)
            }
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="shadow">shadow</Label>
          <Select
            value={shadow ? shadow : ""}
            onValueChange={(value: "small" | "medium" | "large") =>
              useNodeStore
                .getState()
                .changeValue("shadow", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="shadow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">none</SelectItem>
              <SelectItem value="small">small</SelectItem>
              <SelectItem value="medium">medium</SelectItem>
              <SelectItem value="large">large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Container;
