import { CSSProperties } from "react";

import Dustbin from "./dustbin";
import TagI from "@/types/tag";
import useNodeStore from "@/stores/nodes";
import { Button } from "@/components/ui/button";

interface GenerateTagI {
  tag: TagI;
  path: string;
}

const GenerateTag = ({ tag, path }: GenerateTagI) => {
  const setPath = useNodeStore((state) => state.setPath);

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

  function handleClick(event: React.MouseEvent, path: string) {
    event.stopPropagation();
    setPath(path);
  }

  switch (tag.type) {
    case "container":
      return (
        <Dustbin
          path={path}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        >
          {Array.isArray(tag.content) &&
            tag.content.map((child, index) => (
              <GenerateTag key={index} tag={child} path={`${path}/${index}`} />
            ))}
        </Dustbin>
      );

    case "form":
      return (
        <Dustbin
          path={path}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        >
          {Array.isArray(tag.content) &&
            tag.content.map((child, index) => (
              <GenerateTag key={index} tag={child} path={`${path}/${index}`} />
            ))}
        </Dustbin>
      );

    case "text":
      return (
        <p style={style} onClick={(e) => handleClick(e, path)} key={path}>
          {typeof tag.content === "string" ? tag.content : ""}
        </p>
      );

    case "button":
      return (
        <button style={style} onClick={(e) => handleClick(e, path)} key={path}>
          {typeof tag.content === "string" ? tag.content : ""}
        </button>
      );

    case "image":
      return (
        <img
          src={typeof tag.content === "string" ? tag.content : ""}
          alt={tag.placeholder || ""}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        />
      );

    case "input":
      return (
        <input
          defaultValue={typeof tag.content === "string" ? tag.content : ""}
          type={tag.option || "text"}
          placeholder={tag.placeholder || ""}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        />
      );

    case "textarea":
      return (
        <textarea
          defaultValue={typeof tag.content === "string" ? tag.content : ""}
          placeholder={tag.placeholder || ""}
          style={style}
          onClick={(e) => handleClick(e, path)}
          key={path}
        />
      );
    case "shadCnButton":
      return (
        <Button style={style} onClick={(e) => handleClick(e, path)} key={path}>
          {typeof tag.content === "string" ? tag.content : ""}
        </Button>
      );

    default:
      return <></>;
  }
};

export default GenerateTag;
