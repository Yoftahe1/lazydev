import { throttle } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import "@xyflow/react/dist/style.css";
import { useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  MiniMap,
  Controls,
} from "@xyflow/react";
import { useTheme } from "@/components/provider/theme";
import TagI from "@/types/tag";
import NodeI from "@/types/node";
import useNodeStore from "@/stores/nodes";
import NodeContainer from "./node-container";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const nodeTypes = {
  nodeContainer: NodeContainer,
};

const Body = () => {
  const addNode = useNodeStore((state) => state.addNode);
  const nodesState = useNodeStore((state) => state.nodes);
  const setNodesState = useNodeStore((state) => state.setNodes);
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesState);
  const { theme } = useTheme();

  // Explicit type for the throttled function
  const [throttledSetNodesState, setThrottledSetNodesState] = useState<
    (nodes: NodeI[]) => void
  >(() => () => {});

  // Create throttled function using useEffect
  useEffect(() => {
    const throttled = throttle((nodes: NodeI[]) => {
      setNodesState(nodes);
    }, 1000); // Throttling the setNodesState function

    setThrottledSetNodesState(() => throttled);

    // Cleanup throttle function on unmount
    return () => {
      throttled.cancel();
    };
  }, [setNodesState]);

  useEffect(() => {
    setNodes(nodesState);
  }, [nodesState, setNodes]);

  useEffect(() => {
    throttledSetNodesState(nodes); // Call the throttled version of setNodesState
  }, [nodes, throttledSetNodesState]);

  const [, drop] = useDrop(() => ({
    accept: "tag",
    drop: ({ tag }: { tag: TagI }, monitor) => {
      if (monitor.didDrop()) return;
      if (tag.type !== "screen") {
        toast.error("Invalid Drop", {
          description: "Only screens can be dropped here.",
        });
        return;
      }
      const position = monitor.getSourceClientOffset();

      const id = uuidv4();
      addNode({
        id,
        type: "nodeContainer",
        position: {
          x: position!.x,
          y: position!.y,
        },
        data: { tag, id },
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }));

  return (
    <div
      ref={drop}
      className={cn("flex-1 ", theme === "light" && "bg-gray-200")}
    >
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        colorMode={theme}
      >
        <Background />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Body;
