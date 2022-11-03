import React, { useState } from 'react'
import profile from "../Assets/Ridham_Picture.png"

function About() {
    const [hold, setHold] = useState(false);
    function handleState() {
        return (
            setHold(!hold)
        );
    }

    return (
        <div onMouseEnter={handleState} onMouseLeave={handleState} name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='-my-1 flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1200px] w-full grid grid-cols-3 gap-8'>
                    <div className='pb-8 pl-4'>
                        <p className='text-6xl font-bold inline border-b-4 border-[#ff884b]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1200px] w-full grid sm:grid-cols-3 gap-8 px-4'>
                    <div className=' my-auto text-center text-4xl font-bold text-[#ccd6f6]'>
                        <p>Hi, Take a look around what I do!</p>
                    </div>
                    <div className='my-auto text-center font-mono text-[#8892b0]'>
                        <p>I'm passionate about software developemt. I work over certain domain like Java Developer, Web developemt and Cloud for all the
                            way from Enterprise to Corporations. I'can talk an hour about code & anime.</p>
                    </div>

                    <div className=''>
                        {
                            <img className='' src={profile} alt='Ridham_Profile_Picture' />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

