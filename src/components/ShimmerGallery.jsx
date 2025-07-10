import React from "react";
import { ShimmerFeaturedGallery } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ShimmerGallery = () => {
  return (
    <>
      <div className="md:hidden px-5 mt-10">
        <ShimmerSimpleGallery col={2} row={2} card imageHeight={300} caption />
      </div>

      <div className="hidden md:block lg:px-10 mt-10">
        <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
      </div>
    </>
  );
};

export default ShimmerGallery;
