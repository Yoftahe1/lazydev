import { useDrag } from "react-dnd";

import TagI from "@/types/tag";
import defaultTags from "@/constants/tags/default"; 
import shadCnTags from "@/constants/tags/shadcn";

const Tags = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>Default</p>
      <div className="grid grid-cols-2 gap-4 ">
        {defaultTags.map((tag) => (
          <Tag key={tag.name} name={tag.name} tag={tag.value} />
        ))}
      </div>
      <p>ShadCn</p>
      <div className="grid grid-cols-2 gap-4 ">
        {shadCnTags.map((tag) => (
          <Tag key={tag.name} name={tag.name} tag={tag.value} />
        ))}
      </div>
    </div>
  );
};

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
      className="bg-white dark:bg-black rounded-md border-[1px] border-gray-400 hover:border-blue-500 border-dashed h-[117px] flex items-center justify-center"
    >
      <p className=" text-sm">{name.toUpperCase()}</p>
    </div>
  );
}
