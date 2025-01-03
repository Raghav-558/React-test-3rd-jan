import React, { useState } from 'react'
import { ArrowIcon, PlusIcon } from '../utils/icons'

const Features = () => {
  const fromDataList = {
    select: '',
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
      console.log('Form Data:', data)
      console.log('Selected Image:', image)
      setData(fromDataList)
      setImage([])
    } else {
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
          amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet.
        </p>
        <div className='max-w-[768px] mx-auto'>
          <form
            onSubmit={handleChange}
            action='#'
            className='text-light-gray text-sm leading-[21px] font-bold pt-5'
          >
            <div className='flex gap-4 py-2 px-4 bg-white rounded-[30px] max-lg:rounded-[20px] items-center w-full max-h-28 mb-5 border border-dashed'>
              <img
                className={`max-w-24 h-24 w-full object-cover rounded-[20px] ${
                  image === null ? 'hidden' : ''
                }`}
                src={image}
                alt=''
              />
              <label
                htmlFor='file'
                className='max-w-24 border border-dashed rounded-[20px] w-full h-[80px] cursor-pointer flex justify-center items-center'
              >
                <PlusIcon />
              </label>
              <input
                accept='image/*'
                onChange={e => handleImage(e)}
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
                <option value='Phase 1'>Phase 1</option>
                <option value='Phase 2'>Phase 2</option>
                <option value='Phase 3'>Phase 3</option>
              </select>
            </div>
            <div className='flex items-center gap-5 max-sm:flex-col'>
              <input
                onChange={e => setData({ ...data, title: e.target.value })}
                value={data.title}
                type='text'
                placeholder='Title'
                required
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
              <input
                onChange={e => setData({ ...data, datum: e.target.value })}
                value={data.datum}
                type='text'
                placeholder='Datum'
                required
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
            </div>
            <div className='flex items-center gap-5 pt-5 max-sm:flex-col'>
              <input
                onChange={e => setData({ ...data, standort: e.target.value })}
                value={data.standort}
                type='text'
                placeholder='Standort'
                required
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
              <input
                onChange={e => setData({ ...data, preis: e.target.value })}
                value={data.preis}
                type='text'
                placeholder='Preis'
                required
                className='!placeholder-light-gray py-[17.5px] px-4 rounded-[30px] w-full outline-none'
              />
            </div>
            <div className='pt-5 '>
              <input
                onChange={e => setData({ ...data, details: e.target.value })}
                value={data.details}
                type='text'
                placeholder='Details zur Veranstaltung'
                required
                className='py-[55.5px] w-full rounded-[30px] px-4 !placeholder-light-gray outline-none'
              />
            </div>
            <div className='flex justify-center pt-5'>
              <button
                type='submit'
                className='leading-6 text-base text-white font-bold py-4 px-[114.5px] max-md:px-20 max-md:text-sm rounded-[30px] hover:scale-105 transtition-all duration-300 bg-gradient-to-r from-light-blue to-dark-blue'
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
