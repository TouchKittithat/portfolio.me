import React from 'react'

function Contact() {

    const openFaceBook = () => {
        <a href='www.facebook.com'></a>
    }

  return (
    <div className='p-24'>
        <div className="container mx-auto">
            <div className=''>
                <p className='text-white text-base uppercase'>Contact</p>
            </div>
            <div className='py-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-fit my-5'>
                <h1 className='text-6xl font-bold'>Contact</h1>
            </div>
            <div className='text-white mb-10'>
                <p className='text-2xl font-semibold'>Get In Touch.</p>
            </div>
            <div className='flex space-x-12 justify-center my-10'>
                <a href="https://www.facebook.com">
                    <img className="w-auto h-[50px] hover:w-[60px] hover:h-[60px] drop-shadow-md" src="/public/fb.svg" alt="logofb"/>
                </a>
                <a href="https://www.instagram.com">
                    <img className="w-auto h-[50px] hover:w-[60px] hover:h-[60px] drop-shadow-md" src="/public/ig.svg" alt="logoig"/>
                </a>
                <a href="https://www.github.com">
                    <img className="w-auto h-[50px] hover:w-[60px] hover:h-[60px] drop-shadow-md" src="/public/github.svg" alt="logogh"/>
                </a>
            </div>
            <div className='max-w-xl mx-auto text-white text-xl'>
                <form action="/">
                    <input type="text" placeholder='Name' className='w-full pl-4 py-4 my-4 rounded-lg border-2 border-purple-600 placeholder:text-white bg-inherit'/>
                    <input type="text" placeholder='Email' className='w-full pl-4 py-4 my-4 rounded-lg border-2 border-blue-500 placeholder:text-white bg-inherit'/>
                    <textarea type="text" placeholder='Message' className='w-full pl-4 py-4 my-4 rounded-lg border-2 border-sky-400 placeholder:text-white bg-inherit h-32'/>
                    <button className='border-2 px-6 py-2 rounded-lg btn-hover-animation'><span>Send</span></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact