import TagI from "./tag";

export default interface NodeI {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: { tag: TagI; id: string };
}
