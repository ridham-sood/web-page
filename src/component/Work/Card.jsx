import React from "react";

const Card = (props) => {

    return (
        <div className="timeline__item">
            
            <h2 className=" font-bold text-3xl font-serif">{props.place}
                <span className=" text-[#ccd6f6] font-mono font-thin text-xs italic text-ellipsis float-right">{props.year}
                </span>
            </h2>
            <h3 className="text-[#ccd6f6] text-xl font-bold font-mono ">{props.title}</h3>
            <p className="text-[#8892b0] font-extralight font-mono">{props.desc}</p>
            <br/>
        </div>
    )
}

export default Card;