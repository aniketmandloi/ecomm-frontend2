import React from "react";
import { Button } from "./ui/button";

const KnowMoreBar = () => {
  return (
    <div className="flex bg-green-950 justify-end px-8 py-5">
      <Button
        variant={"outline"}
        className="rounded-2xl bg-green-950 text-white"
      >
        Know more
      </Button>
    </div>
  );
};

export default KnowMoreBar;
