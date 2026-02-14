import { NavLink } from "react-router-dom";
import { navbLink } from "../links/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    console.log(isOpen);
    
    return (
        <header className="grid grid-cols-2 bg-blanco text-verde font-bold ">
            <div className="justify-start">
                <img 
                    src="./imagen1.jpeg" alt="naturalito" 
                    className="w-30 m-auto"
                />
            </div>

            <button 
                className="flex justify-end items-center md:hidden m-auto" 
                onClick={toggle}
            >
                {
                    isOpen ? <IoClose size={34}/>:<GiHamburgerMenu size={34} className=" "/>
                }
                
            </button>

            {/*  */}
            <nav className={`
                col-span-2 md:col-span-1 text-center transition-all duration-200
                ${
                    isOpen ?
                    " bg-verde-claro flex flex-col gap-2 text-"
                    :
                    "hidden"
                }
            `}>
                {
                    navbLink.map( link =>(
                        <div 
                            className='hover:bg-verde hover:text-blanco-humo'
                            key={link.id}
                        >
                            <NavLink
                                to={link.href}
                                onClick={() => setIsOpen(false)} 
                            >
                                {link.title}
                            </NavLink>
                        </div>
                    ))
                }
            </nav>
        </header>
    );
}
