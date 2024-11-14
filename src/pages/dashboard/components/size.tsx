import getTag from "../function/get-tag";
import useNodeStore from "@/stores/nodes";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const Size = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { width, height } = getTag(nodes, path);

  return (
    <div className="flex gap-4">
      <div>
        <Label htmlFor="width">Width</Label>
        <Input
          type="number"
          id="width"
          placeholder="width"
          value={width ? width : ""}
          min={0}
          onChange={(event) => {
            const value = event.target.value;
            useNodeStore
              .getState()
              .changeValue("width", value ? Number(value) : undefined);
          }}
        />
      </div>
      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          type="number"
          id="height"
          placeholder="height"
          value={height ? height : ""}
          min={0}
          onChange={(event) => {
            const value = event.target.value;

            useNodeStore
              .getState()
              .changeValue("height", value ? Number(value) : undefined);
          }}
        />
      </div>
    </div>
  );
};

export default Size;
