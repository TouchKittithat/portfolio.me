import React from 'react'

function Skill() {
  return (
    <div className='bg-[#333] p-24 '>
        <div className='container mx-auto'>
            <div className=''>
                <p className='text-white text-base'>SKILLS</p>
            </div>
            <div className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-fit my-5'>
                <h1 className='text-6xl font-bold'>My Skills</h1>
            </div>

            <div className='text-white mb-10'>
                <p className='text-xl font-semibold'>I like to take responsibility to craft aesthetic user</p>
                <p className='text-xl font-semibold'>experience using modern frontend architecture.</p>
            </div>
            
            <div className='my-10'>
                <p className='text-white text-lg font-medium uppercase tracking-wide'>Languages and tools</p>
            </div>
            <div className='flex space-x-10 my-10'>
                <img className="w-[50px] h-[50px]" src="/public/html.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/css.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/php.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/javascipt.svg" alt="logo"/>
                <img className="w-[50px] h-[50px] bg-white p-1 rounded-lg" src="/public/nodejs.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/vite.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/figma.svg" alt="logo"/>
            </div>

            <div>
                <p className='text-white uppercase text-lg tracking-wide'>Libraries and frameworks</p>
            </div>
            <div className='flex space-x-10 my-10'>
                <img className="w-[50px] h-[50px]" src="/public/react.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/nextjs.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/tailwind.svg" alt="logo"/>
                <img className="w-[50px] h-[50px]" src="/public/bootstrap.svg" alt="logo"/>
            </div>
            
            <p>DATABASES</p>
            <img className="w-[24px] h-[24px]" src="/public/vite.svg" alt="logo"/>
        </div>
        
    </div>
  )
}

export default Skill