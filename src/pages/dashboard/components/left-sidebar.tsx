import { ModeToggle } from "@/components/mode-toggle";
import Tags from "./Tags";

const LeftSidebar = () => {
  return (
    <div className="w-72 overflow-auto border-r-2 border-input  flex flex-col relative">
      <div className="flex-1 overflow-auto">
        <Tags />
      </div>
      <div className="flex p-4 border-t-[1px] justify-between items-center  ">
        <p>Theme</p>
        <ModeToggle />
      </div>
    </div>
  );
};

export default LeftSidebar;
