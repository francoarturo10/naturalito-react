import { NavLink } from "react-router-dom";
import { navbLink } from "../links/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <header className="bg-blanco sticky top-0 z-50 shadow-md">
            <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="w-24 md:w-28">
                    <img 
                        src="./imagen1.jpeg" 
                        alt="naturalito" 
                        className="w-full"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-1">
                    {navbLink.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.href}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-xl font-semibold transition-colors ${
                                    isActive 
                                        ? 'bg-verde text-blanco' 
                                        : 'text-verde hover:bg-rosa'
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button 
                    onClick={toggle}
                    className="md:hidden p-2 text-verde"
                >
                    {isOpen ? <IoClose size={32} /> : <GiHamburgerMenu size={32} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden bg-verde-claro border-t border-verde-claro">
                    {navbLink.map(link => (
                        <NavLink
                            key={link.id}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-6 py-4 font-semibold border-b border-verde-claro/50 ${
                                    isActive 
                                        ? 'bg-verde text-blanco' 
                                        : 'text-verde hover:bg-rosa'
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
}