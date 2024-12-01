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
      color: "000000",
    },
  },
  {
    name: "Card",
    value: {
      type: "container",
      direction: "column",
      width: 300,
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
      content: [],
    },
  },
  {
    name: "Header",
    value: {
      type: "container",
      direction: "row",
      align: "center",
      justify: "space-between",
      pl: 20,
      pr: 20,
      height: 50,
      shadow: "medium",
      content: [
        {
          type: "container",
          direction: "row",
          gap: 10,
          align: "center",
          content: [
            {
              type: "image",
              height: 30,
              width: 30,
              content:
                "data:image/jpeg;base64,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",
              bRadius: 5,
              placeholder: "logo",
            },
            {
              type: "text",
              content: "ARTIMUS",
              fontSize: 18,
              fontWeight: "bold",
            },
          ],
        },
        {
          type: "container",
          direction: "row",
          gap: 10,
          align: "center",
          content: [
            {
              type: "text",
              content: "Home",
              fontWeight: "bold",
              fontSize: 13,
            },
            {
              type: "text",
              content: "About",
              fontSize: 13,
              fontWeight: "bold",
            },
            {
              type: "text",
              content: "Pricing",
              fontSize: 13,
              fontWeight: "bold",
            },
            {
              type: "text",
              content: "Contact",
              fontSize: 13,
              fontWeight: "bold",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Image",
    value: {
      type: "image",
      height: 300,
      width: 300,
      content: "",
      bRadius: 20,
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
      bRadius: 5,
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
      content: "",
      bRadius: 5,
      placeholder: "Please provide text",
    },
  },
];

export default defaultTags;
