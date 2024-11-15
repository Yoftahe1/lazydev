import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { RgbaColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-min">
          <div
            className="w-6 h-6 rounded-sm"
            style={{ background: color }}
          ></div>
          <p className="text-xs">{color}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="p-2 mt-2 bg-background border border-input z-50 rounded-xl"
      >
        <RgbaColorPicker onChange={(color) => setColor(rgbaToHex(color))} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColorPicker;

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

function rgbaToHex({ r, g, b, a }: RGBA): string {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");

  const alpha = Math.round(a * 255);

  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`;
}
