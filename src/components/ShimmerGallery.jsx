import React from 'react'
import { ShimmerFeaturedGallery } from "react-shimmer-effects";


const ShimmerGallery = () => {
  return (
    <div className='px-5 lg:px-10 mt-10'>
        <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
    </div>
  )
}

export default ShimmerGallery