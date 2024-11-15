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

const Display = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { direction, gap, align, justify,content } = getTag(nodes, path);

  if (typeof content !== "object") return null;

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="direction">direction</Label>
          <Select
            value={direction ? direction : ""}
            onValueChange={(value: "row" | "column") =>
              useNodeStore
                .getState()
                .changeValue("direction", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="column">Column</SelectItem>
              <SelectItem value="row">row</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="gap">gap</Label>
          <Input
            min={0}
            id="gap"
            type="number"
            placeholder="gap"
            value={gap ? gap : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("gap", value ? Number(value) : undefined);
            }}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="align">align</Label>
          <Select
            value={align ? align : ""}
            onValueChange={(
              value: "flex-start" | "center" | "flex-end" | "stretch"
            ) =>
              useNodeStore
                .getState()
                .changeValue("align", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="align" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flex-start">Flex start</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="flex-end">Flex End</SelectItem>
              <SelectItem value="stretch">Stretch</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="justify">justify</Label>
          <Select
            value={justify ? justify : ""}
            onValueChange={(
              value:
                | "flex-start"
                | "center"
                | "flex-end"
                | "space-between"
                | "space-around"
                | "space-evenly"
            ) =>
              useNodeStore
                .getState()
                .changeValue("justify", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="justify" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flex-start">Flex start</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="flex-end">Flex End</SelectItem>
              <SelectItem value="space-between">Between</SelectItem>
              <SelectItem value="space-around">Around</SelectItem>
              <SelectItem value="space-evenly">Evenly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Display;
