import React from 'react'

export default function Card() {
  return (
    <div className='w-1/2  mx-auto bg-white border rounded shadow py-2 px-2 flex-col gap-4 hover:shadow-lg transition-shadow duration-300 mt-4'>
      <h1 className='text-xl font-bold mb-2'>Card Title</h1>
        <p className='text-gray-700 mb-4'>This is a card component using Tailwind CSS.</p>
    </div>
  )
}
