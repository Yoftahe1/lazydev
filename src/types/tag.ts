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
  radius?: number;
  bgColor?: string;
  shadow?: "small" | "medium" | "large";
  color?: string;
  fontSize?: number;
  textAlign?: "left" | "center" | "right";
  fontWeight?: "lighter" | "bolder" | "bold" | "normal";
  placeholder?: string;
  inputOption?: "date" | "button" | "checkbox" | "email" | "password" | "text";
  content?: TagI[] | string;
}
