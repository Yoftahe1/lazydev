import getTag from "../function/get-tag";
import useNodeStore from "@/stores/nodes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Name = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { type, name } = getTag(nodes, path);

  if (
    type !== "screen" &&
    !(
      path.length === 3 && getTag(nodes, path[0]).name?.startsWith("components")
    )
  )
    return null;

  return (
    <div>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        placeholder="name"
        value={name ? name : ""}
        onChange={(event) => {
          const value = event.target.value;
          useNodeStore
            .getState()
            .changeValue("name", value ? value : undefined);
        }}
      />
    </div>
  );
};

export default Name;
