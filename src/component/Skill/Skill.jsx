import React from 'react';

import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JavaScript from '../Assets/javascript.png';
import ReactImg from '../Assets/react.png';
import Node from '../Assets/node.png';
import Spring from '../Assets/springboot.png';
import GitHub from '../Assets/github.png';
import DB from '../Assets/db.png';
import Java from '../Assets/java.png';
import Linux from '../Assets/linux.png';

const Skills = () => {
    return (
        <div name='skill' className='w-full bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-6xl font-bold inline border-b-4 border-[#ff884b]'>Skills</p>
                </div>

                <div className=' place-content-center w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8 font-mono'>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={Java} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>JAVA</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={Spring} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>SPRING BOOT</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={DB} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>DATA BASE</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={JavaScript} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={HTML} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>HTML</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={CSS} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>CSS</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={ReactImg} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>REACT</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={Node} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>NODE JS</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={GitHub} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>GITHUB</p>
                    </div>
                    <div className='shadow-md bg-[#132c52] rounded-xl shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto mt-4 ' src={Linux} alt="HTML icon" />
                        <p className='my-4 text-[#ccd6f6]'>LINUX</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;