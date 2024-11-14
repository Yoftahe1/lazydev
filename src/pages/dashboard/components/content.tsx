import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useNodeStore from "@/stores/nodes";
import getTag from "../function/get-tag";

const Content = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { content } = getTag(nodes, path);

  if (typeof content !== "string") return null;

  return (
    <div>
      <Label htmlFor="content">content</Label>
      <Input
        id="content"
        placeholder="content"
        value={content ? content : ""}
        onChange={(event) => {
          const value = event.target.value;
          useNodeStore
            .getState()
            .changeValue("content", value ? value : undefined);
        }}
      />
    </div>
  );
};

export default Content;
