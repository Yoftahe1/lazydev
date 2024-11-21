import { useState } from "react";
import { useDrag } from "react-dnd";
import { ChevronUp, ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import TagI from "@/types/tag";
import defaultTags from "@/constants/tags/default";
import shadCnTags from "@/constants/tags/shadcn";
import useNodeStore from "@/stores/nodes";

const Tags = () => {
  const nodes = useNodeStore((state) => state.nodes).filter((node) =>
    node.data.tag.name?.startsWith("components")
  );

  const customTags = nodes.flatMap((node) => {
    let tags = node.data.tag.content as TagI[];
    return tags.map((tag) => ({
      value: tag,
      name: tag.name ? tag.name : "name",
    }));
  });

  return (
    <div className="flex flex-col gap-2 ">
      <Accordion title="Default" tags={defaultTags} />
      <Accordion title="ShadCn" tags={shadCnTags} />
      <Accordion title="ReactNative" tags={[]} />
      <Accordion title="Custom" tags={customTags} />
    </div>
  );
};

interface AccordionI {
  title: string;
  tags: {
    value: TagI;
    name: string;
  }[];
}
function Accordion({ title, tags }: AccordionI) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full">
        <div className="w-full flex justify-between hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <p className="text-sm font-semibold">{title}</p>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className=" mt-2 ">
        {tags.length === 0 ? (
          <p className="w-full text-center">coming soon</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 ">
            {tags.map((tag) => (
              <Tag key={tag.name} name={tag.name} tag={tag.value} />
            ))}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default Tags;

function Tag({ tag, name }: { tag: TagI; name: string }) {
  const [, drag] = useDrag(() => ({
    type: "tag",
    item: { tag },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="bg-white dark:bg-black rounded-md border-[1px] border-gray-400 hover:border-blue-500 border-dashed h-[117px] flex items-center justify-center cursor-move"
    >
      <p className=" text-sm">{name.toUpperCase()}</p>
    </div>
  );
}
