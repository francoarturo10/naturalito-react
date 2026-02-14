import { NavLink } from "react-router-dom";
import { navbLink } from "../links/link";

export default function Footer() {
    

    return (
        <div className="bg-gradiente-natural-3 flex flex-col items-center gap-11">
            <div className="flex flex-col gap-11">
                <div className="flex flex-col items-center gap-9">
                    <img src="./imagen1.jpeg" alt="naturalito" className="w-70"/>
                    <div className="text-texto font-semibold text-xl w-70 text-center">
                        <p>Tus bulgaritos 100% Artesanales</p>
                        <p>para transformar tu salud intestinal.</p>
                    </div>
                </div>

                <header className="flex flex-col gap-5 text-left w-80 ">
                    <h1 className="text-texto font-bold text-2xl">Navegación</h1>
                    <nav className="flex flex-col gap-3 text-xl font-semibold">
                        {
                            navbLink.map( link =>(
                            <div 
                                key={link.id}
                            >
                                <NavLink
                                    to={link.href}
                                    
                                >
                                    {link.emoji}  {link.title}
                                </NavLink>
                            </div>
                        ))
                        }
                    </nav>
                </header>
                <section className="w-70 flex flex-col gap-5">
                    <h1 className="text-texto font-bold text-2xl">Contacto</h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-3 bg-blanco-humo rounded-full text-xl">📱</span>
                            <div>
                                <p className="text-xl font-bold text-texto">WhatsApp</p>
                                <p className="text-lg font-semibold">+51 936 335 903</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-3 bg-blanco-humo rounded-full text-xl">📱</span>
                            <div>
                                <p className="text-xl font-bold text-texto">Instagram</p>
                                <a className="text-lg font-semibold hover:text-blanco" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/naturalito.kefir">@Naturalito.kefir</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-3 bg-blanco-humo rounded-full text-xl">📍</span>
                            <div>
                                <p className="text-xl font-bold text-texto">Ubicación</p>
                                <p className="text-lg font-semibold">Trujillo, La Libertad</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-80 border-t flex flex-col gap-1 items-center text-center mt-5 ">
                <p className="text-texto font-black">© 2025 Naturalito | Todos los derechos reservados</p>
                <p className="text-texto font-bold">Desarrollado por <span className="font-black">FranKeSSJ10</span></p>
      
            </div>
        </div>
    );
}
