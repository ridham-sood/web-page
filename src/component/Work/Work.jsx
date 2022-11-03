import React from "react";
import data from "./Data"
import Card from "./Card";
import "./work.css";

function Work() {
    return (
        <div name='work' className='w-full h-screen -my-1 text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 max-w-[1000px]'>
                    <p className=' text-6xl font-bold inline border-b-4 border-[#ff884b]'>
                        Work
                    </p>

                </div>

                {/* container for projects */}
                <div className="">
                    <div name='Work' className='w-full  bg-[#0a192f]'>
                        <div className="resume__container  w-full grid sm:grid-cols-3 gap-4 px-1">
                            <div className="timeline grid  shadow-[#040c16] hover:scale-105 duration-500">
                                {
                                    data.map(val => {
                                        if(val.category === "Professional"){
                                            return (
                                            <Card
                                                key={val.id}
                                                icon={val.icon}
                                                place={val.place}
                                                title={val.title}
                                                year={val.year}
                                                desc={val.desc}
                                            />
                                        )
                                        }
                                    })
                                }
                            </div>
                            <div className="timeline grid shadow-[#040c16] hover:scale-105 duration-500">
                                {
                                    data.map(val => {
                                        if(val.category === "Education"){
                                            return (
                                            <Card
                                                key={val.id}
                                                icon={val.icon}
                                                place={val.place}
                                                title={val.title}
                                                year={val.year}
                                                desc={val.desc}
                                            />
                                        )
                                        }
                                    })
                                }
                            </div>
                            <div className="timeline grid shadow-[#040c16] hover:scale-105 duration-500">
                                {
                                    data.map(val => {
                                        if(val.category === "Project"){
                                            return (
                                            <Card
                                                key={val.id}
                                                icon={val.icon}
                                                place={val.place}
                                                title={val.title}
                                                year={val.year}
                                                desc={val.desc}
                                            />
                                        )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Work;
