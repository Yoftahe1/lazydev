export default interface TagI {
  type:
    | "container"
    | "text"
    | "button"
    | "image"
    | "input"
    | "textarea"
    | "form"
    |"shadCnButton";
  direction?: "column" | "row";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  textAlign?: "left" | "center" | "right";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number;
  alt?: string;
  placeholder?: string;
  color?: string;
  width?: number;
  height?: number;
  radius?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  bgColor?: string;
  fontSize?: number;
  fontWeight?: "lighter" | "bolder" | "bold" | "normal";
  content?: TagI[] | string;
  option?: "date" | "button" | "checkbox" | "email" | "password" | "text";
}
