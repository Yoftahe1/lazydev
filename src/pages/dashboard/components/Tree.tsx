import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import { useState, Key } from "react";

import useNodeStore from "@/stores/nodes";
import getTree from "../function/get-tree";

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const nodes = useNodeStore((state) => state.nodes);
  const setPath = useNodeStore((state) => state.setPath);

  const treeData = getTree(nodes, "");

  return (
    <Tree
    className=""
      treeData={treeData}
      expandedKeys={expandedKeys}
      onExpand={(expandedKeys) => setExpandedKeys(expandedKeys)}
      onSelect={(path) => setPath(path[0].toString())}
    />
  );
};

export default App;
