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
import { Input } from "@/components/ui/input";

const Border = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { bColor, border, bRadius, bType } = getTag(nodes, path);

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="border">border</Label>
          <Input
            min={0}
            id="border"
            type="number"
            placeholder="border"
            value={border ? border : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("border", value ? Number(value) : undefined);
            }}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="bRadius">b radius</Label>
          <Input
            min={0}
            id="bRadius"
            type="number"
            placeholder="b radius"
            value={bRadius ? bRadius : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("bRadius", value ? Number(value) : undefined);
            }}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="bColor">b color</Label>
          <ColorPicker
            value={bColor ? bColor : "00000000"}
            onChange={(value) =>
              useNodeStore
                .getState()
                .changeValue("bColor", value ? value : undefined)
            }
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="bType">b type</Label>
          <Select
            value={bType ? bType : ""}
            onValueChange={(value: "none" | "solid" | "dashed" | "dotted") =>
              useNodeStore
                .getState()
                .changeValue("bType", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="bType" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">none</SelectItem>
              <SelectItem value="solid">solid</SelectItem>
              <SelectItem value="dashed">dashed</SelectItem>
              <SelectItem value="dotted">dotted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Border;
