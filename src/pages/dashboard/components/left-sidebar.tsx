import { ModeToggle } from "@/components/mode-toggle";
import Tags from "./Tags";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import App from "./Tree";

const LeftSidebar = () => {
  return (
    <div className="w-72  border-r-2 border-input  flex flex-col ">
      <Tabs defaultValue="tag" className="flex-1 p-4 overflow-auto">
        <TabsList className="w-full">
          <TabsTrigger value="tag" className="flex-1">
            Tags
          </TabsTrigger>
          <TabsTrigger value="tree" className="flex-1">
            Tree
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tag">
          <Tags />
        </TabsContent>
        <TabsContent value="tree">
          <App/>
        </TabsContent>
      </Tabs>
      <div className="flex p-4 py-2 border-t-[1px] justify-between items-center  ">
        <p>Theme</p>
        <ModeToggle />
      </div>
    </div>
  );
};

export default LeftSidebar;
