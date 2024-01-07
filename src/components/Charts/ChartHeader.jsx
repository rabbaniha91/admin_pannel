import React from 'react'

const ChartHeader = ({category, title}) => {
  return (
    <div className='mb-10'>
        <div>
            <p className='text-lg text-gray-400'>نمودار</p>
            <p className=' text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200'>
                {category}
            </p>
        </div>
        <p className=' text-center dark:text-gray-200 text-lg mb-2 mt-3'>
            {title}
        </p>
    </div>
  )
}

export default ChartHeader