import useNodeStore from "@/stores/nodes";
import GenerateTag from "./components/generate-tag";

const Preview = () => {
  const nodes = useNodeStore((state) => state.nodes);
  return (
    <div>
      {nodes.map((node) => (
        <GenerateTag key={node.id} tag={node.data.tag} />
      ))}
    </div>
  );
};

export default Preview;
