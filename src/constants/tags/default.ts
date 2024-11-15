import TagI from "@/types/tag";

const defaultTags: {
  value: TagI;
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
      content: "",
      radius: 20,
      placeholder: "Please provide image alt",
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
      color: "000000",
      inputOption: "password",
      content: "",
      radius: 5,
      placeholder: "Please provide input",
    },
  },
  {
    name: "Screen",
    value: {
      type: "screen",
      direction: "column",
      height: 1000,
      width: 1800,
      content: [],
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
];

export default defaultTags;
