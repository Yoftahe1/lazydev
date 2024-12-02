import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ControlI {
  page: number;
  pages: number;
  changePage: (increase: boolean) => void;
}

const Control = ({ pages, page, changePage }: ControlI) => {
  return (
    <div className="bg-background overflow-hidden rounded-3xl flex items-center fixed bottom-3 left-1/2 right-1/2 -translate-x-1/2 w-max border-[1px] border-input">
      <Button
        variant={"ghost"}
        disabled={page === 0}
        onClick={() => changePage(false)}
        className="px-6 py-1 rounded-none"
      >
        <ChevronLeft />
      </Button>
      <p className="px-5 items-center">
        {page + 1} / {pages}
      </p>
      <Button
        variant={"ghost"}
        disabled={page + 1 === pages}
        onClick={() => changePage(true)}
        className="px-6 py-1 rounded-none"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Control;
