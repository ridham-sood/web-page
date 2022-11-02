import React, { useState } from "react";
import "./sidebar.css";
import logoR from "../Assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Sidebar() {

    const [nav, setNav] = useState(false);

    function handleState() {
        return (
            setNav(!nav)
        );
    }


    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16213E]">
            <div className="resize-none logo" to="/">
                <img src={logoR} alt="ridhamLogo" />
            </div>
            <ul className="hidden sm:flex ">
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="skill" smooth={true} duration={500} >
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>

            </ul>

            {/* Menu Hamburger Mobile */}

            <div onClick={handleState} className="z-10 sm:hidden text-[#ccd6f6] hover:text-[#ff884b]">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col  bg-[#16213E] justify-center items-center"}>
                <li className="py-6 text-4xl" to="/Home">
                    <Link onClick={handleState} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl nav-info " to="/info">
                    <Link onClick={handleState} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl nav-work" to="/work">
                    <Link onClick={handleState} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl nav-skill" to="/skill">
                    <Link onClick={handleState} to="skill" smooth={true} duration={500} >
                        Skill
                    </Link>
                </li>
                <li className="py-6 text-4xl nav-contact" to="/contact">
                    <Link onClick={handleState} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;
