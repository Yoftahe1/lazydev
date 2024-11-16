import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center py-2 px-20 border-b-[1px] border-input">
      <p className="font-pj font-bold text-3xl ">LAZYDEV</p>
      <div className="flex gap-3">
        <ModeToggle />
        <Button onClick={() => navigate("/dashboard")}>Get Started</Button>
      </div>
    </header>
  );
};

export default Navbar;
