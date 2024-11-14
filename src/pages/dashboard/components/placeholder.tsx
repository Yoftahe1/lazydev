import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useNodeStore from "@/stores/nodes";
import getTag from "../function/get-tag";

const Placeholder = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { placeholder, type } = getTag(nodes, path);

  if (type !== "input" && type !== "textarea" && type !== "image") return null;

  return (
    <div>
      <Label htmlFor="content">placeholder</Label>
      <Input
        id="placeholder"
        placeholder="placeholder"
        value={placeholder ? placeholder : ""}
        onChange={(event) => {
          const value = event.target.value;
          useNodeStore
            .getState()
            .changeValue("placeholder", value ? value : undefined);
        }}
      />
    </div>
  );
};

export default Placeholder;
