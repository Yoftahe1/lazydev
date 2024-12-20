import useNodeStore from "@/stores/nodes";
import getTag from "../function/get-tag";
import Box from "./box";
import { Button } from "@/components/ui/button";
import Size from "./size";
import Content from "./content";
import Placeholder from "./placeholder";
import Display from "./display";
import Text from "./text";
import Container from "./container";
import Name from "./name";
import Border from "./border";
import Position from "./position";

const RightSidebar = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const deleteTag = useNodeStore((state) => state.deleteTag);

  const tag = getTag(nodes, path);

  return (
    <div className="w-72 overflow-auto border-l-2 border-input p-4 flex flex-col gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <h6 className="text-sm font-bold text-center">
          {tag.type.toLocaleUpperCase()} FEATURES
        </h6>
        <Name />
        <Content />
        <Placeholder />
        <Size />
        <Display />
        <Text />
        <Container/>
        <Border/>
        <Position/>
        <Box />
      </div>
      <Button
        variant={"destructiveOutline"}
        className="w-full"
        onClick={() => deleteTag(path)}
      >
        Remove
      </Button>
    </div>
  );
};

export default RightSidebar;
