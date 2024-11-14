import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-14 flex justify-between items-center shadow-md">
      <div>
        <p>Lazy Dev</p>
      </div>
      <div className="flex gap-5 items-center">
        <ModeToggle />
        <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
      </div>
    </div>
  );
};

export default Navbar;
