import { useState } from "react";
import { Frown } from "lucide-react";

import useNodeStore from "@/stores/nodes";
import Control from "./components/control";
import GenerateTag from "./components/generate-tag";

const Preview = () => {
  const nodes = useNodeStore((state) => state.nodes).filter(
    (node) => !node.data.tag.name?.startsWith("components")
  );
  const [page, setPage] = useState(0);

  function changePage(increase: boolean) {
    if (increase && page < nodes.length - 1) setPage((prev) => prev + 1);
    else if (!increase && page > 0) setPage((prev) => prev - 1);
  }

  return (
    <>
      {nodes.length === 0 && (
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <Frown size={150} color="#fbbf24" />
          <h4 className="text-2xl">
            No screen could not be found.
          </h4>
          <p className="text-md text-muted-foreground">Try creating a screen first.</p>
        </div>
      )}
      {nodes.length > 0 && (
        <div>
          <GenerateTag key={nodes[page].id} tag={nodes[page].data.tag} />
          <Control changePage={changePage} page={page} pages={nodes.length} />
        </div>
      )}
    </>
  );
};

export default Preview;
