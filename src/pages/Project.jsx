import React from 'react'

function Project() {
  return (
    <div className='p-24'>
        <div className='container mx-auto'>
            <div className=''>
                <p className='text-white text-base uppercase'>Project</p>
            </div>
            <div className='py-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-fit my-5'>
                <h1 className='text-6xl font-bold'>My Projects</h1>
            </div>
            <div className='text-white mb-10'>
                <p className='text-2xl font-semibold'>Some thing I've built with love, expertise and a</p>
                <p className='text-2xl font-semibold'>pinch of magical ingredients.</p>
            </div>


            <div className='grid grid-cols-3 gap-12'>
                <div className='bg-red-500'>
                    <p>Advisor System</p>
                </div>
                <div className='bg-blue-500'>
                    <p>Restuarant Web</p>
                </div>
                <div className='bg-green-500'>
                    <p>Ecommerce Web</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Project