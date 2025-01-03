import React, { useState } from 'react'
import { ArrowIcon, PlusIcon } from '../utils/icons'

const Features = () => {
  const fromDataList = {
    select: 'kategorie',
    title: '',
    datum: '',
    standort: '',
    preis: '',
    details: ''
  }

  const [image, setImage] = useState(null)

  const handleImage = e => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const [data, setData] = useState(fromDataList)

  const handleChange = e => {
    e.preventDefault()

    if (
      data.select !== '' &&
      data.title !== '' &&
      data.datum !== '' &&
      data.standort !== '' &&
      data.preis !== '' &&
      data.details !== ''
    ) {
      // Form is valid
      console.log('Form Data:', data)
      console.log('Selected Image:', image)
      setData(fromDataList)
      setImage(null)
    } else {
      // Handle validation errors here
      console.log('Form is incomplete. Please fill all fields.')
    }
  }

  return (
    <div className='min-h-screen bg-primary-gray py-10 flex items-center'>
      <div className='max-w-[1312px] px-4 mx-auto'>
        <h1 className='text-4xl leading-[44px] text-center font-bold text-dark-black max-md:text-3xl '>
          Event einsenden
        </h1>
        <p className='text-center font-light text-xl leading-[30px] max-w-[768px] mx-auto pt-5 max-md:pt-3 text-light-gray max-md:text-base'>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <div className='max-w-[768px] mx-auto'>
          <form
            onSubmit={handleChange}
            action='#'
            className='text-light-gray text-sm leading-[21px] font-bold pt-5'
          >
            <div className='w-full max-h-28 flex py-2 px-4 bg-white rounded-[30px] mb-5'>
              <img
                className='max-h-24 max-w-24 rounded-lg'
                src={image}
                alt=''
              />
              <label
                htmlFor='file'
                className='flex justify-center items-center max-w-24 max-h-[96px] border border-dashed rounded-lg w-full h-[80px] cursor-pointer'
              >
                <PlusIcon />
              </label>
              <input
                accept='image/*'
                onChange={handleImage}
                type='file'
                hidden
                id='file'
              />
            </div>
            <div>
              <select
                onChange={e => setData({ ...data, select: e.target.value })}
                value={data.select}
                id='kategorie'
                name='kategorie'
                className='py-[17.5px] px-4 pr-[23px] bg-white w-full outline-none rounded-[30px] mb-5'
              >
                <option value='konzert'>Kategorie</option>
                <option value='theater'>Phase 1</option>
                <option value='party'>Phase 2</option>
                <option value='workshop'>Phase 3</option>
              </select>
            </div>
            <div className='flex items-center gap-5 max-sm:flex-col'>
              <input
                onChange={e => setData({ ...data, title: e.target.value })}
                value={data.title}
                type='text'
                placeholder='Titel'
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
              <input
                onChange={e => setData({ ...data, datum: e.target.value })}
                value={data.datum}
                type='text'
                placeholder='Datum'
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
            </div>
            <div className='flex items-center gap-5 pt-5 max-sm:flex-col'>
              <input
                onChange={e => setData({ ...data, standort: e.target.value })}
                value={data.standort}
                type='text'
                placeholder='Standort'
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
              <input
                onChange={e => setData({ ...data, preis: e.target.value })}
                value={data.preis}
                type='text'
                placeholder='Preis'
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
            </div>
            <div className='pt-5 '>
              <input
                onChange={e => setData({ ...data, details: e.target.value })}
                value={data.details}
                type='text'
                placeholder='Details zur Veranstaltung'
                className='py-[55.5px] w-full rounded-[30px] px-4 !placeholder-light-gray outline-none'
              />
            </div>
            <div className='flex justify-center pt-5'>
              <button
                type='submit'
                className='leading-6 text-base text-white font-bold py-4 px-[114.5px] max-md:px-20 max-md:text-sm rounded-[30px] button-bg hover:scale-105 transtition-all duration-300'
              >
                Event einsenden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Features
