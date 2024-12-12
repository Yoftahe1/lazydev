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

const Position = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { zIndex, position, top, bottom, right, left } = getTag(nodes, path);
  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="position">position</Label>
          <Select
            value={position ? position : ""}
            onValueChange={(
              value: "absolute" | "relative" | "fixed" | "static" | "sticky"
            ) =>
              useNodeStore
                .getState()
                .changeValue("position", value ? value : undefined)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="absolute">absolute</SelectItem>
              <SelectItem value="relative">relative</SelectItem>
              <SelectItem value="fixed">fixed</SelectItem>
              <SelectItem value="static">static</SelectItem>
              <SelectItem value="sticky">sticky</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="zIndex">z index</Label>
          <Input
            min={0}
            id="zIndex"
            type="number"
            placeholder="z index"
            value={zIndex ? zIndex : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("zIndex", value ? Number(value) : undefined);
            }}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="top">top</Label>
          <Input
            min={0}
            id="top"
            type="number"
            placeholder="top"
            value={top !== undefined ? top : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("top", value ? Number(value) : undefined);
            }}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="bottom">bottom</Label>
          <Input
            min={0}
            id="bottom"
            type="number"
            placeholder="bottom"
            value={bottom !== undefined ? bottom : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("bottom", value ? Number(value) : undefined);
            }}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="right">right</Label>
          <Input
            min={0}
            id="right"
            type="number"
            placeholder="right"
            value={right !== undefined ? right : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("right", value ? Number(value) : undefined);
            }}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="left">left</Label>
          <Input
            min={0}
            id="left"
            type="number"
            placeholder="left"
            value={left !== undefined ? left : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("left", value ? Number(value) : undefined);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Position;
