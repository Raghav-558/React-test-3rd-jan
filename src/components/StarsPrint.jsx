import React from 'react'
import { STARS_LIST } from '../utils/helper'

const StarsPrint = () => {
  return (
    <div className='max-w-[100px] mx-auto py-10'>
      {STARS_LIST.map((item, i) => (
        <div className='flex gap-2' key={i}>
          {item.stars.map((stars, i) => (
            <span className='text-2xl font-medium text-red-700' key={i}>
              {stars}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default StarsPrint
