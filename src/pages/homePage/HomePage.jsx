import React from 'react'
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';


function HomePage() {

  return (
    <div className=' mt-5 lg:mt-20 mb-6'>

      {/* top section */}
      <SectionOne />

      {/* Latest News */}
      <SectionTwo />

      {/* World news */}
      <SectionThree />

      
      {/* technology news */}
      <SectionFour />

    </div>
  )
}

export default HomePage