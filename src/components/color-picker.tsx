import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { RgbaColorPicker, RgbaColor } from "react-colorful";

interface ColorPickerI {
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ value, onChange }: ColorPickerI) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full p-2">
          <div
            className="w-6 h-6 rounded-sm"
            style={{ background: `#${value}` }}
          />
          <p className="text-xs">#{value}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="p-3 mt-2 bg-background border border-input z-50 rounded-xl"
      >
        <RgbaColorPicker
          color={hexToRgba(value)}
          onChange={(color) => {
            onChange(rgbaToHex(color));
          }}
        />
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

  return `${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`;
}

function hexToRgba(hex: string): RgbaColor | undefined {
  // Remove the '#' if present
  hex = hex.replace(/^#/, "");

  let r,
    g,
    b,
    a = 1;

  if (hex.length === 3) {
    // Convert shorthand 3-character hex to full form
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6 || hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);

    // If 8 characters, the last two represent alpha
    if (hex.length === 8) {
      a = parseInt(hex.slice(6, 8), 16) / 255;
    }
  } else {
    return undefined; // Invalid hex string
  }

  return { r, g, b, a };
}
