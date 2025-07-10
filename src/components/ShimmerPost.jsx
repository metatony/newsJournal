import React from 'react'
import { ShimmerPostList } from "react-shimmer-effects";


const ShimmerPost = () => {
  return (
    <>
      <div className='md:hidden px-5 mt-10'>
          <ShimmerPostList postStyle="STYLE_FOUR" col={2} row={1} gap={15} />
      </div>

      <div className='hidden md:block lg:px-10 mt-10'>
          <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={1} gap={30} />
      </div>
    
    
    
    </>


  )
}

export default ShimmerPost