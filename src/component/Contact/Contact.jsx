import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen -my-1 bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/12539cea-1abc-4dec-952f-0e5a499d88e5" className='flex flex-col max-w-[1200px] w-full'>
                <div className='pb-8'>
                    <p className='text-6xl font-bold inline border-b-4 border-[#ff884b] text-gray-300'>Contact</p>
                </div>
                <div className=' place-content-center w-full grid grid-cols-1 gap-4 text-center py-8 font-mono max-w-[600px] mx-auto'>
                    <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' required />
                    <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' required />
                    <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='text-white border-2 rounded-3xl  hover:bg-[#ff884b] border-[#ff884b] px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
                </div>
            </form>
        </div>
    )
}

export default Contact