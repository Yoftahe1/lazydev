import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

import App from "./Tree";
import Tags from "./Tags";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LeftSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-72  border-r-2 border-input  flex flex-col ">
      <div className="border-b-[1px] px-4 py-4 flex flex-col gap-2">
        <p className="font-bold text-xl">Lazy Dev</p>
      </div>
      <Tabs defaultValue="tag" className="flex-1 flex flex-col p-4  overflow-auto">
        <TabsList className="w-full">
          <TabsTrigger value="tag" className="flex-1 ">
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
            <App />
          </TabsContent>
      </Tabs>
      <div className="border-t-[1px] px-4 py-2 flex flex-col gap-2">
        <div className="flex justify-between items-center  ">
          <p>Preview</p>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => navigate("/preview")}
          >
            <Eye />
          </Button>
        </div>
        <div className="flex justify-between items-center  ">
          <p>Theme</p>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
