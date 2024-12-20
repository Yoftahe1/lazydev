export default interface TagI {
  type:
    | "screen"
    | "container"
    | "text"
    | "button"
    | "image"
    | "input"
    | "textarea"
    | "form"
    | "shadCnButton";

  name?: string;
  direction?: "column" | "row";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number;
  width?: number;
  height?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  border?: number;
  bColor?: string;
  bType?: "none" | "solid" | "dashed" | "dotted";
  bRadius?: number;
  bgColor?: string;
  shadow?: "none" | "small" | "medium" | "large";
  color?: string;
  fontSize?: number;
  textAlign?: "left" | "center" | "right";
  fontWeight?: "lighter" | "bolder" | "bold" | "normal";
  placeholder?: string;
  inputOption?: "date" | "button" | "checkbox" | "email" | "password" | "text";
  position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
  zIndex?: number;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  content?: TagI[] | string;
}
