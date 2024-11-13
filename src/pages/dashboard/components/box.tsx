import { Input } from "@/components/ui/input";

const Box = () => {
  return (
    <div className="flex flex-col items-center border border-input py-[7px] gap-[7px] rounded-lg">
      <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Mt"/>
      <div className="w-full flex items-center justify-evenly">
        <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Ml"/>
        <div className="flex flex-col items-center border border-input p-[7px] rounded-md">
          <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Pt"/>
          <div className="flex items-center">
            <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Pl"/>
            <div className="w-12 h-12 flex items-center justify-center">x</div>
            <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Pr"/>
          </div>
          <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Pb"/>
        </div>
        <Input min={0} type="number" className="w-10 h-9 p-2" placeholder="Mr"/>
      </div>
      <Input  min={0} type="number" className="w-10 h-9 p-2" placeholder="Mb"/>
    </div>
  );
};

export default Box;
