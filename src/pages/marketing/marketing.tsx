import { useNavigate } from "react-router-dom";

import Navbar from "./components/navbar";
import dark from "@/assets/images/dark.png";
import light from "@/assets/images/light.png";
import pattern from "@/assets/images/pattern.png";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/provider/theme";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Marketing = () => {
  const navigate = useNavigate();
  const { theme} = useTheme();

  return (
    <div>
      <Navbar />
      <section className="relative">
        <img src={pattern} className="absolute h-full"/>
        <div className="flex flex-col items-center p-20 gap-10">
          <p className="text-lg font-inter ">
            Smart website builder, made for Developers
          </p>
          <p className="mt-0 text-4xl font-bold leading-tight max-w-[800px] text-center sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
            Turn your idea into extraordinary
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative"> website </span>
            </span>
          </p>
          <Button size={"lg"} onClick={() => navigate("/dashboard")}>
            Get Started
          </Button>
          <BackgroundGradient containerClassName="w-2/3">
            <img
              src={theme === "dark" ? dark : light}
              className="rounded-[20px]"
            />
          </BackgroundGradient>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
