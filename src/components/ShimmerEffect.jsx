import React from "react";
import { ShimmerTitle } from "react-shimmer-effects";

const ShimmerEffect = () => {
  return (
    <div className="px-5 lg:px-10">
      <ShimmerTitle line={2} gap={10} variant="primary" />
    </div>
  );
};

export default ShimmerEffect;
