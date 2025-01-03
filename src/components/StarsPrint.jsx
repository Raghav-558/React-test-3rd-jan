import React from 'react'
import { STARS_LIST } from '../utils/helper'

const StarsPrint = () => {
  return (
    <div className='max-w-[100px] mx-auto py-10'>
      {STARS_LIST.map((item, i) => (
        <div key={i} className='flex gap-2'>
          {item.stars.map((stars, i) => (
            <div key={i} className='text-2xl font-medium text-red-700'>
              {stars}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default StarsPrint
