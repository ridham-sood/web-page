import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { BsChat } from "react-icons/bs";
import {Link} from 'react-scroll';

function Home() {
    return (

        <div name="home" className='w-full h-screen -my-1 bg-[#0a192f]'>
            {/* Container */}
            <div className='  max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className=' font-mono text-[#ff884b]'>Hi, my name is</p>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    RIDHAM SOOD
                </h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className=' font-Dancing text-xl tracking-wide text-[#8892b0] py-4 max-w-[700px]'>
                    I want to work in challenging environment, I can prove myself.
                    I'm having knowledge of Java Development, Web Application Development,
                    Problem Solving, Data Structure and Alogorithm, Azure, OOPs and SQL.
                </p>
                <div className=" flex grid-rows-3 gap-4">
                    <div>
                        <Link to="contact" smooth={true} duration={500} >
                            <BsChat className='text-white text-5xl hover:text-[#3b8837] ' />
                        </Link>
                    </div>
                    <div  >
                        <a target="_blank" href='https://www.instagram.com/itsmeridham/'>
                            <AiOutlineInstagram className=' text-white text-5xl hover:text-[#e739af]' />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/ridham-sood">
                            <AiOutlineGithub className='text-white text-5xl hover:text-[#4078c0] ' />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;