import React, { useState } from 'react'

const AddNumbers = () => {
  const [numberOne, setNumberOne] = useState()
  const [numberTwo, setNumberTwo] = useState()
  const [add, setAdd] = useState(0)

  const addNumbers = () => {
    setAdd(numberOne + numberTwo)
  }

  return (
    <div className='flex items-center justify-center py-[60px] max-lg:py-10 flex-col'>
      <div className='max-w-[1140px] px-4 mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <input
            className='py-3 px-3 rounded-lg border border-black outline-none !placeholder-black font-semibold'
            value={numberOne}
            placeholder='Number One'
            type='number'
            onChange={(e) => setNumberOne(Number(e.target.value))}
          />
          <input
            className='py-3 px-3 rounded-lg border border-black outline-none !placeholder-black font-semibold'
            value={numberTwo}
            placeholder='Number Two'
            type='number'
            onChange={(e) => setNumberTwo(Number(e.target.value))}
          />
          <button
            onClick={addNumbers}
            className='py-3 px-3 border border-green bg-green-400 rounded-lg font-semibold'
          >
            Add Numbers
          </button>
        </div>
        <p className='text-2xl font-bold text-red-500 max-md:text-xl text-center pt-5'>
          Sum Of Two Numbers = {add}
        </p>
      </div>
    </div>
  )
}

export default AddNumbers
