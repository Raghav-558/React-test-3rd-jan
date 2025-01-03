import React from 'react'

const TablePrint = () => {
  const TABLE = []

  for (let i = 1; i <= 10; i++) {
    TABLE.push(
      <p key={i}>
        2 * {i} = {2 * i}
      </p>
    )
  }

  return (
      <div className='flex items-center justify-center flex-col'>
      <h2 className='text-center text-2xl font-bold pb-5'>Print table of 2</h2>
      <div className='text-xl'>{TABLE}</div>
    </div>
  )
}

export default TablePrint
