import NodeI from "@/types/node";
import TagI from "@/types/tag";

function getTree(nodes: NodeI[], parentKey?: string) {
  const tags = nodes.map((node) => {
    return node.data.tag;
  });

  return getTreeNode(tags, parentKey);
}

export default getTree;

interface TreeNodeI {
  key: string;
  title: string;
  children?: TreeNodeI[];
}

function getTreeNode(tags: TagI[], parentKey?: string) {
  return tags.map((tag, index) => {
    const key = parentKey ? `${parentKey}/${index}` : index.toString();

    const TreeNode: TreeNodeI = {
      title: tag.type,
      key: key,
    };

    if (tag.content && Array.isArray(tag.content)) {
      TreeNode.children = getTreeNode(tag.content, key);
    }

    return TreeNode;
  });
}
