import React from 'react'
import Profile from '../assets/profile.jpg'

function Home() {
  return (
    <div className='bg-[#333] p-24'>
        <div className="container mx-auto flex justify-between">
            <div className=''>
                <div className='my-2'>
                    <p className='text-purple-600 font-medium text-lg'>Hi, my name is</p>
                </div>
                <div className='my-4'>
                    <p className='text-white font-medium text-6xl'>Kittithat Chubuathong</p>
                </div>
                <div className='my-6'>
                    <p className='text-slate-300 font-medium text-2xl my-2 hover:text-sky-500 hover:cursor-pointer'>I build things for the web,</p>
                    <p className='text-slate-300 font-medium text-2xl my-2 hover:text-blue-500 hover:cursor-pointer'>I create aesthetic and modern apps,</p>
                    <p className='text-slate-300 font-medium text-2xl my-2 hover:text-purple-600 hover:cursor-pointer'>A pragmatic Frontend Developer</p>
                </div>
                <div className='my-10'>
                    <a href='/' className='bg-purple-600 p-3 text-white rounded-md hover:bg-purple-700'>Let's Talk</a>
                </div>
            </div>
            <div>
                <img src={Profile} alt="profile" className='rounded-xl w-[15rem] h-[20rem]'/>
            </div>
        </div>
    </div>
  )
}

export default Home