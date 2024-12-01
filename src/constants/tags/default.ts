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
      height: 60,
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
              content:
                "https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg",

              bRadius: 5,
              placeholder: "logo",
            },
          ],
        },
        {
          type: "container",
          direction: "row",
          gap: 20,
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
        {
          type: "container",
          content: [
            {
              type: "shadCnButton",
              content: "Create an account",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Hero",
    value: {
      type: "container",
      height: 700,
      direction: "row",
      justify: "space-between",
      align: "center",
      gap: 40,
      pl: 100,
      pr: 100,
      content: [
        {
          type: "container",
          direction: "column",
          align: "flex-start",
          gap: 30,
          width: 900,
          content: [
            {
              type: "text",
              content: "A special credit card made for Developers.",
              fontWeight: "bold",
              fontSize: 65,
            },
            {
              type: "text",
              width: 600,
              content:
                "Join millions of companies of all size that use rareblocks to accept payments online and in person.",
              fontSize: 20,
            },
            {
              type: "shadCnButton",
              content: "Create an account",
            },
          ],
        },
        {
          type: "container",
          width: 900,
          direction: "row",
          justify: "center",
          content: [
            {
              type: "image",
              height: 600,
              content:
                "https://d33wubrfki0l68.cloudfront.net/a78a55b3add0dc26d3587d02ecc23bebc28bf5f8/67091/images/hero/5.2/illustration.png",
              bRadius: 20,
              placeholder: "Please provide image alt",
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
