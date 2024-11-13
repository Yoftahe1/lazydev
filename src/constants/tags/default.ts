import Tag from "@/types/tag";

const defaultTags: {
  value: Tag;
  name: string;
}[] = [
  {
    name: "Button",
    value: {
      type: "button",
      content: "Submit",
      width: 150,
      height: 40,
      bgColor: "ffffff",
    },
  },
  {
    name: "Card",
    value: {
      type: "container",
      direction: "column",
      width: 300,
      bgColor: "ffffff",
      content: [],
    },
  },
  {
    name: "Container",
    value: {
      type: "container",
      direction: "column",
      height: 300,
      width: 1000,
      bgColor: "ffffff",
      content: [],
    },
  },
  {
    name: "Form",
    value: {
      type: "form",
      direction: "column",
      height: 300,
      width: 1000,
      bgColor: "ffffff",
      content: [],
    },
  },
  {
    name: "Image",
    value: {
      type: "image",
      height: 300,
      width: 300,
      bgColor: "ffffff",
      content: "Please provide image source",
      radius: 20,
      alt: "Please provide image alt",
    },
  },
  {
    name: "Input",
    value: {
      type: "input",
      height: 40,
      width: 250,
      pl: 10,
      pr: 10,
      bgColor: "ffffff",
      option: "password",
      content: "",
      radius: 5,
      placeholder: "Please provide input",
    },
  },
  {
    name: "Text",
    value: {
      type: "text",
      color: "000000",
      bgColor: "ffffff",
      content: "Please provide text value",
    },
  },
  {
    name: "Textarea",
    value: {
      type: "textarea",
      height: 80,
      width: 250,
      pl: 10,
      pr: 10,
      bgColor: "ffffff",
      content: "",
      radius: 5,
      placeholder: "Please provide text",
    },
  },
  {
    name: "hhh",
    value: {
      type: "shadCnButton",
      content: "Submit",
      width: 150,
      height: 40,
    },
  },
];

export default defaultTags;
