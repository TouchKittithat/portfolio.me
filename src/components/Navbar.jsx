import React from "react";

function Navbar(){
    return (
        <div className="items-center bg-[#333]/60 p-4 sticky top-0 drop-shadow-md backdrop-blur-sm z-10">
            <div className="flex justify-around">
                <div className="text-white flex gap-1 items-center">
                    <img className="w-[24px] h-[24px]" src="/public/vite.svg" alt="logo"/>
                    <a href="/" className="text-lg font-medium">Portfolio</a>
                </div>
                <div className='items-center'>
                    <ul className="flex space-x-5 items-center text-white font-medium">
                        <li><a href="/" className="hover:text-purple-500">Home</a></li>
                        <li><a href="#skill" className="hover:text-purple-500">Skills</a></li>
                        <li><a href="#project" className="hover:text-purple-500">Project</a></li>
                        <li><a href="#work" className="hover:text-purple-500">Work</a></li>
                        <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;