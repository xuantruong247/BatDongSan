import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-overlay z-50">
      <RingLoader color="#64CCC5" />
    </div>
  );
};

export default Loading;
