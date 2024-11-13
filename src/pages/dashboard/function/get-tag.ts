import TagI from "@/types/tag";
import NodeI from "@/types/node";

const getTag = (nodes: NodeI[], path: string) => {
  const keys = path.split("/").map(Number);
  const firstKey = keys[0];

  let current: TagI | TagI[] = [nodes[firstKey].data.tag];

  if (keys.length === 1) return current[0];

  for (let i = 0; i < keys.length - 1; i++) {
    const key = i > 0 ? keys[i] : 0;

    if (Array.isArray(current[key].content)) {
      current = current[key].content;
    }
  }

  const lastKey = keys[keys.length - 1];

  return current[lastKey];
};

export default getTag;
