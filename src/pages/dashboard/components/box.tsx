import { Input } from "@/components/ui/input";
import useNodeStore from "@/stores/nodes";
import getTag from "../function/get-tag";

const Box = () => {
  const path = useNodeStore((state) => state.path);
  const nodes = useNodeStore((state) => state.nodes);
  const { pt, pr, pb, pl, mt, mr, mb, ml } = getTag(nodes, path);

  return (
    <div className="flex flex-col items-center border border-input py-[7px] gap-[7px] rounded-lg">
      <Input
        min={0}
        type="number"
        className="w-10 h-9 p-2 "
        placeholder="Mt"
        value={mt ? mt : ""}
        onChange={(event) => {
          const value = event.target.value;
          useNodeStore
            .getState()
            .changeValue("mt", value ? Number(value) : undefined);
        }}
      />
      <div className="w-full flex items-center justify-evenly">
        <Input
          min={0}
          type="number"
          className="w-10 h-9 p-2 "
          placeholder="Ml"
          value={ml ? ml : ""}
          onChange={(event) => {
            const value = event.target.value;
            useNodeStore
              .getState()
              .changeValue("ml", value ? Number(value) : undefined);
          }}
        />
        <div className="flex flex-col items-center border border-input p-[7px] rounded-md">
          <Input
            min={0}
            type="number"
            className="w-10 h-9 p-2 "
            placeholder="Pt"
            value={pt ? pt : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("pt", value ? Number(value) : undefined);
            }}
          />
          <div className="flex items-center">
            <Input
              min={0}
              type="number"
              className="w-10 h-9 p-2 "
              placeholder="Pl"
              value={pl ? pl : ""}
              onChange={(event) => {
                const value = event.target.value;
                useNodeStore
                  .getState()
                  .changeValue("pl", value ? Number(value) : undefined);
              }}
            />
            <div className="w-12 h-12 flex items-center justify-center">x</div>
            <Input
              min={0}
              type="number"
              className="w-10 h-9 p-2 "
              placeholder="Pr"
              value={pr ? pr : ""}
              onChange={(event) => {
                const value = event.target.value;
                useNodeStore
                  .getState()
                  .changeValue("pr", value ? Number(value) : undefined);
              }}
            />
          </div>
          <Input
            min={0}
            type="number"
            className="w-10 h-9 p-2 "
            placeholder="Pb"
            value={pb ? pb : ""}
            onChange={(event) => {
              const value = event.target.value;
              useNodeStore
                .getState()
                .changeValue("pb", value ? Number(value) : undefined);
            }}
          />
        </div>
        <Input
          min={0}
          type="number"
          className="w-10 h-9 p-2 "
          placeholder="Mr"
          value={mr ? mr : ""}
          onChange={(event) => {
            const value = event.target.value;
            useNodeStore
              .getState()
              .changeValue("mr", value ? Number(value) : undefined);
          }}
        />
      </div>
      <Input
        min={0}
        type="number"
        className="w-10 h-9 p-2 "
        placeholder="Mb"
        value={mb ? mb : ""}
        onChange={(event) => {
          const value = event.target.value;
          useNodeStore
            .getState()
            .changeValue("mb", value ? Number(value) : undefined);
        }}
      />
    </div>
  );
};

export default Box;
