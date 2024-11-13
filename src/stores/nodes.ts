import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import TagI from "../types/tag";
import NodeI from "../types/node";

type State = {
  path: string;
  nodes: NodeI[];
};

type Actions = {
  addNode: (node: NodeI) => void;
  setPath: (path: string) => void;
  deleteTag: (path: string) => void;
  setNodes: (nodes: NodeI[]) => void;
  addTag: (tag: TagI, path: string) => void;
};

const useNodeStore = create<State & Actions>()(
  immer((set) => ({
    nodes: [
      {
        id: "0",
        type: "nodeContainer",
        position: { x: 300, y: 300 },
        data: {
          id: "0",
          tag: {
            type: "container",
            direction: "column",
            height: 300,
            width: 300,
            bgColor: "56ac7b",
            content: [
              {
                type: "text",
                content: "Card header",
                bgColor: "ffff88",
                textAlign: "center",
              },
              {
                type: "container",
                bgColor: "ffffff",
                direction: "row",
                content: [
                  {
                    type: "button",
                    content: "Cancel",
                    bgColor: "ff0000",
                    color: "ffffff",
                  },
                  {
                    type: "button",
                    content: "submit",
                    bgColor: "ffffff",
                  },
                ],
              },
            ],
          },
        },
      },
    ],
    path: "",
    setPath: (path) => set(() => ({ path })),
    setNodes: (nodes) =>
      set((state) => {
        state.nodes = nodes;
      }),
    addNode: (node) =>
      set((state) => {
        state.nodes = [...state.nodes, node];
      }),
    addTag: (tag, path) =>
      set((state) => {
        const keys = path.split("/").map(Number);
        const firstKey = keys[0];

        let current: TagI[] = [state.nodes[firstKey].data.tag];

        for (let i = 0; i < keys.length - 1; i++) {
          const key = i > 0 ? keys[i] : 0;

          if (Array.isArray(current[key].content)) {
            current = current[key].content;
          }
        }

        const lastKey = keys.length > 1 ? keys[keys.length - 1] : 0;
        if (Array.isArray(current[lastKey].content)) {
          current[lastKey].content.push(tag);
        }
      }),
    deleteTag: (path: string) =>
      set((state) => {
        const keys = path.split("/").map(Number);
        const firstKey = keys[0];

        if (keys.length === 1) {
          state.nodes = state.nodes.filter((_, index) => index !== keys[0]);
        } else {
          let current: TagI[] | TagI = [state.nodes[firstKey].data.tag];
          const lastKey = keys.pop();
          if (lastKey === undefined) return;
          keys[0] = 0;

          for (const key of keys) {
            if (Array.isArray(current)) {
              current = current[key];
            } else if (current && Array.isArray(current.content)) {
              current = current.content[key];
            }
          }
          if (!Array.isArray(current) && Array.isArray(current.content)) {
            current.content.splice(lastKey, 1);
          }
        }

        state.path = "";
      }),
  }))
);

export default useNodeStore;