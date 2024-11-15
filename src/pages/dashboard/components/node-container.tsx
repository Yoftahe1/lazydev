import { memo } from "react";

import Tag from "../../../types/tag";
import GenerateTag from "./generate-tag";
import useNodeStore from "../../../stores/nodes";

interface NodeContainerI {
  data: { tag: Tag; id: string };
}

const NodeContainer = memo(({ data }: NodeContainerI) => {
  const nodes = useNodeStore((state) => state.nodes);

  const { id } = data;
  const path = nodes.findIndex((node) => node.id === id);

  return (
    <>
      <p className="text-center text-gray-400 text-3xl mb-2">
        {data.tag.name ? data.tag.name : data.id}
      </p>
      <div className="nowheel border-[1px] border-gray-300 bg-background">
        <GenerateTag tag={data.tag} path={path.toString()} />
      </div>
    </>
  );
});

export default NodeContainer;
