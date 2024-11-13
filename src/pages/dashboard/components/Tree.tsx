import "rc-tree/assets/index.css";
import { useState, Key } from "react";
import Tree, { TreeNodeProps } from "rc-tree";
import { ChevronUp, ChevronDown } from "lucide-react";

import useNodeStore from "@/stores/nodes";
import getTree from "../function/get-tree";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const nodes = useNodeStore((state) => state.nodes);
  const setPath = useNodeStore((state) => state.setPath);
  const path = useNodeStore((state) => state.path);

  const treeData = getTree(nodes, "");

  const switcherIcon = ({ isLeaf, expanded }: TreeNodeProps) => {
    if (isLeaf) return;
    return (
      <Button variant={"ghost"} className="h-6 w-6 p-0 mr-10">
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </Button>
    );
  };

  return (
    <Tree
      showIcon={false}
      treeData={treeData}
      expandedKeys={expandedKeys}
      onExpand={(expandedKeys) => setExpandedKeys(expandedKeys)}
      onSelect={(path) => setPath(path[0].toString())}
      switcherIcon={switcherIcon}
      selectedKeys={[path]}
      titleRender={({ title, key }) => (
        <Button
          variant={"ghost"}
          className={cn(
            "px-1 h-6 rounded-[5px] text-sm",
            key === path && "bg-muted "
          )}
        >
          {title}
        </Button>
      )}
    />
  );
};

export default App;
