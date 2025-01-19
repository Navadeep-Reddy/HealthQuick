import React from 'react'
import PercentageChart from './PercentageChart'
const MarcoAnal = () => {
  return (
    <div className='w-[80%] mx-auto h-[100vh] '>
      <h1 className='text-5xl text-center font-medium text-DGreen'>Macro Nutrient Analysis</h1>
      <PercentageChart />
      <div className='w-full flex flex-col mx-10 justif'>
        <h1 className='text-3xl font-semibold text-DGreen'>Verdict</h1>
        <div>
          <p className='text-TBlack'>Status: Placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default MarcoAnal
