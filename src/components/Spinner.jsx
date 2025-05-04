import React from "react";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";
const Spinner = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center absolute left-0 top-0 bg-white">
      <Quantum size="100" speed="1.75" color="black" />;
    </div>
  );
};

export default Spinner;
