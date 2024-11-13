import Body from "./components/body";
import useNodeStore from "@/stores/nodes";
import LeftSidebar from "./components/left-sidebar";
import RightSidebar from "./components/right-sidebar";

const Dashboard = () => {
  const path = useNodeStore((state) => state.path);
  return (
    <div className="flex justify-between h-screen">
      <LeftSidebar />
      <Body/>
      {path && <RightSidebar />}
    </div>
  );
};

export default Dashboard;
