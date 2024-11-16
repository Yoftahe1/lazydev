import { useState } from "react";

import useNodeStore from "@/stores/nodes";
import Control from "./components/control";
import GenerateTag from "./components/generate-tag";

const Preview = () => {
  const nodes = useNodeStore((state) => state.nodes);
  const [page, setPage] = useState(0);

  function changePage(increase: boolean) {
    if (increase && page < nodes.length - 1) setPage((prev) => prev + 1);
    else if (!increase && page > 0) setPage((prev) => prev - 1);
  }

  return (
    <div>
      <GenerateTag key={nodes[page].id} tag={nodes[page].data.tag} />
      <Control changePage={changePage} page={page} pages={nodes.length} />
    </div>
  );
};

export default Preview;
