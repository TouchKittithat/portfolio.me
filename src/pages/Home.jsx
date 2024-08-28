import React , {useState} from 'react'
import Lottie from '../assets/lottie.png'

function Home() {

  return (
    <div className='bg-[#333] p-24'>
        <div className="container mx-auto flex justify-between">
            <div className=''>
                <div className='my-2'>
                    <p className='text-purple-600 font-medium text-lg'>Hi, my name is</p>
                </div>
                <div className='my-4 lg:flex gap-6'>
                    <p className='text-white font-medium text-6xl underline underline-offset-8 decoration-purple-600'>Kittithat</p>
                    <p className='text-white font-medium text-6xl'>Chubuathong</p>
                </div>
                <div className='my-6 w-fit'>
                    <p className='text-slate-300 font-medium text-2xl my-2 hover:text-sky-400 hover:cursor-pointer'>I build things for the web,</p>
                    <p className='text-slate-300 font-medium text-2xl my-2 hover:text-blue-500 hover:cursor-pointer'>I create aesthetic and modern apps,</p>
                    <p className='text-slate-300 font-medium text-2xl my-2 hover:text-purple-600 hover:cursor-pointer'>A pragmatic Frontend Developer</p>
                </div>
                <div className='my-16 flex gap-10 items-center'>
                    <a href='/' className='bg-purple-600 p-3 text-white rounded-md hover:bg-purple-700 font-bold'>Let's Talk</a>
                    <a href='/' className='btn-hover-animation'><span>Just click it</span></a>
                </div>
            </div>
            <div>
                <img src={Lottie} alt="profile" className='w-[35rem] h-[35rem]'/>
            </div>
        </div>
    </div>
  )
}

export default Home