import { useDrop } from "react-dnd";
import { CSSProperties, ReactNode, MouseEvent } from "react";

import TagI from "@/types/tag";
import useNodeStore from "@/stores/nodes";

interface DustbinProps {
  children?: ReactNode;
  style?: CSSProperties;
  path: string;
  onClick?: (event: MouseEvent) => void;
}

const Dustbin = ({ children, onClick, style, path }: DustbinProps) => {
  const addTag = useNodeStore((state) => state.addTag);
  const pathState = useNodeStore((state) => state.path);

  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: "tag",
    drop: (item: { tag: TagI }, monitor) => {
      if (monitor.didDrop()) return;
      addTag(item.tag, path);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }));

  return (
    <div
      ref={drop}
      onClick={onClick}
      style={{
        border: (isOverCurrent && isOver)||(pathState===path) ? "1px solid #1677ff" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Dustbin;
