import { CSSProperties } from "react";

import TagI from "@/types/tag";
import { Button } from "@/components/ui/button";

interface GenerateTagI {
  tag: TagI;
}

const GenerateTag = ({ tag }: GenerateTagI) => {
  const style: CSSProperties = {
    color: tag.color ? `#${tag.color}` : undefined,
    backgroundColor: tag.bgColor ? `#${tag.bgColor}` : undefined,
    borderRadius: tag.radius ? `${tag.radius}px` : undefined,
    fontSize: tag.fontSize ? `${tag.fontSize}px` : undefined,
    fontWeight: tag.fontWeight,
    textAlign: tag.textAlign,
    gap: tag.gap ? `${tag.gap}px` : undefined,
    paddingTop: tag.pt ? `${tag.pt}px` : undefined,
    paddingLeft: tag.pl ? `${tag.pl}px` : undefined,
    paddingBottom: tag.pb ? `${tag.pb}px` : undefined,
    paddingRight: tag.pr ? `${tag.pr}px` : undefined,
    marginTop: tag.mt ? `${tag.mt}px` : undefined,
    marginLeft: tag.ml ? `${tag.ml}px` : undefined,
    marginBottom: tag.mb ? `${tag.mb}px` : undefined,
    marginRight: tag.mr ? `${tag.mr}px` : undefined,
    width: tag.width ? `${tag.width}px` : undefined,
    height: tag.height ? `${tag.height}px` : undefined,
    display: tag.type === "container" ? "flex" : undefined,
    flexDirection: tag.direction,
    alignItems: tag.align,
    justifyContent: tag.justify,
  };

  switch (tag.type) {
    case "container":
      return (
        <div style={style}>
          {Array.isArray(tag.content) &&
            tag.content.map((child, index) => (
              <GenerateTag key={index} tag={child} />
            ))}
        </div>
      );
    case "screen":
      delete style["height"];
      delete style["width"];
      return (
        <div style={style}>
          {Array.isArray(tag.content) &&
            tag.content.map((child, index) => (
              <GenerateTag key={index} tag={child} />
            ))}
        </div>
      );

    case "form":
      return (
        <form style={style}>
          {Array.isArray(tag.content) &&
            tag.content.map((child, index) => (
              <GenerateTag key={index} tag={child} />
            ))}
        </form>
      );

    case "text":
      return <p style={style}>{tag.content?.toString() || ""}</p>;

    case "button":
      return <button style={style}>{tag.content?.toString() || ""}</button>;

    case "image":
      return (
        <img
          src={tag.content?.toString() || ""}
          alt={tag.placeholder || ""}
          style={style}
        />
      );

    case "input":
      return (
        <input
          defaultValue={tag.content?.toString() || ""}
          type={tag.inputOption || "text"}
          placeholder={tag.placeholder || ""}
          style={style}
        />
      );

    case "textarea":
      return (
        <textarea
          defaultValue={tag.content?.toString() || ""}
          placeholder={tag.placeholder || ""}
          style={style}
        />
      );
    case "shadCnButton":
      return <Button style={style}>{tag.content?.toString() || ""}</Button>;

    default:
      return <></>;
  }
};

export default GenerateTag;
