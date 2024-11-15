import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import useNodeStore from "@/stores/nodes";
import getTag from "../function/get-tag";
import ColorPicker from "@/components/color-picker";

const Text = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { fontWeight, fontSize, textAlign, content, type, color } = getTag(
    nodes,
    path
  );

  if (typeof content === "object" || type === "image") return null;

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="size">size</Label>
          <Input
            min={0}
            id="size"
            type="number"
            placeholder="width"
            value={fontSize ? fontSize : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("fontSize", value ? Number(value) : undefined);
            }}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="weight">weight</Label>
          <Select
            value={fontWeight ? fontWeight : ""}
            onValueChange={(value: "lighter" | "bolder" | "bold" | "normal") =>
              useNodeStore
                .getState()
                .changeValue("fontWeight", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lighter">lighter</SelectItem>
              <SelectItem value="normal">normal</SelectItem>
              <SelectItem value="bold">bold</SelectItem>
              <SelectItem value="bolder">bolder</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="color">color</Label>
          <ColorPicker
            value={color ? color : "00000000"}
            onChange={(value) =>
              useNodeStore
                .getState()
                .changeValue("color", value ? value : undefined)
            }
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="text-align">text-align</Label>
          <Select
            value={textAlign ? textAlign : ""}
            onValueChange={(value: "left" | "center" | "right") =>
              useNodeStore
                .getState()
                .changeValue("textAlign", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="align" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">left</SelectItem>
              <SelectItem value="center">center</SelectItem>
              <SelectItem value="right">right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Text;
