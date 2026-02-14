import { FaPlus } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


import Slider from "../components/Slider";

export default function InicioPage() {
    

    return (
        <div>

            <Slider 
                slides={[
                    "./banner1.jpeg",
                    "./banner2.jpeg",
                    "./banner3.jpeg",
                    "./banner4.jpeg",
                    "./banner5.jpeg",
                ]}
            />


            <main className="w-full text-center ">

                <aside className="
                    flex flex-col justify-center gap-4 mt-7 mb-7 pt-7 pb-7
                    bg-rosa/50 text-texto m-4 rounded-2xl
                ">
                    <h1 className="text-4xl font-bold">👩🏻‍🦱 Sobre <span className="text-verde">Mí</span></h1>
                    <p className="text-xl text-parrafo">
                        Conoce la historia detras de <span className="text-verde font-bold">Naturalito</span> y mi pasión por los probióticos naturales
                    </p>
                </aside>

                <section className="m-4 bg-blanco rounded-2xl flex flex-col justify-center items-center gap-4 p-8">
                    <article className="flex flex-col justify-center items-center gap-3">
                        <div className="w-40 h-40 bg-rosa rounded-full flex justify-center items-center">
                            <img src="./kefir.png" alt="" className="w-30 " />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">Maria</h2>
                            <p className="text-xl text-verde font-semibold">Fundadora de Naturalito</p>
                        </div>
                    </article>
                    <article className="bg-verde-claro/20 rounded-2xl text-left p-5">
                        <h2 className="text-xl text-parrafo font-semibold">Mi Historia</h2>
                        <p className="text-parrafo mt-2">Maria Claudia Aguilar - <br />Fundadora de Naturalito, ipsum dolor sit amet consectetur adipisicing elit. Vitae cum harum 
                            nihil impedit ratione expedita alias facilis nemo rerum. Quae deleniti sequi 
                            magnam sint odio odit, fugit quas accusantium porro?
                        </p>
                    </article>
                    <article className="bg-verde-claro/20 rounded-2xl text-left p-5">
                        <h3 className="text-xl font-semibold">Mi Compromiso</h3>
                        <p className="text-parrafo mt-2">
                            Cada búlgaro que envío es cultivado con amor y cuidado personal. No uso procesos industriales ni químicos.
                            Mi misión es que cada persona reciba búlgaros 100% vivos y auténticos, tal como los recibí yo.
                        </p>
                    </article>
                </section>
                
            </main>

            <div className="flex gap-3 justify-center mb-4">
                <div className="bg-blanco/90 rounded-2xl p-2 flex gap-3 items-center">
                    <FaCity size={34} className="text-verde"/>
                    <div className="">
                        <h3 className="text-texto"> Productos<br />para Trujillo</h3>
                        <span className="text-parrafo">Delivery<br />rápido</span>
                    </div>

                </div>
              
                <div className="bg-blanco/90 rounded-2xl p-2 flex items-center gap-3 ">
                    <FaPlus size={34} className="text-verde"/>
                    
                    <div className="">
                        <span>Clientes felices</span><br />
                        <span>100% Naturales</span>
                    </div>
                </div>
            </div>


            <div className="m-4 flex flex-col items-center justify-center gap-6 text-center">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl text-texto font-bold">¿Que es el <span className="text-verde">Kéfir</span>?</h2>
                    <p className="text-parrafo">Bebida fermentada, rica en probióticos, obtenida al fermentar leche con nódulos de 
                        kéfir (búlgaros). Ayuda a la digestión, fortalece el sistema inmune y equilibra 
                        la flora intestinal.
                    </p>
                </div>

                <div className="bg-blanco text-left rounded-t-4xl pb-6">
                    <div className="w-full h-50 rounded-t-4xl overflow-hidden">
                        <img src="./bulgaro.jpg" alt="kefir" className=" object-cover"/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <div>
                            <h2 className="text-2xl text-texto font-bold ">Los Bulgaros: Pequeños granos</h2>
                            <p className="text-parrafo font-bold">
                                Los búlgaros son organismos vivos microscópicos que parecen coliflor
                            </p>
                        </div>
                        <span className="text-texto/50 font-bold">
                            Cuando pones estos búlgaros en leche, "se comen" la lactosa y crean el kéfir: una 
                            bebida súper nutritiva llena de probióticos buenos para tu salud.
                        </span>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <div className="border border-verde/50 text-parrafo rounded-2xl text-center w-35 text-sm p-2">
                            <p className="text-xl text-verde font-bold">30+</p>
                            <p className="text-texto font-semibold">Cepas probioticas</p>
                        </div>
                        <div className="border border-verde/50 text-parrafo rounded-2xl text-center w-35 text-sm p-2">
                            <p className="text-xl text-verde font-bold">24h</p>
                            <p className="text-texto font-semibold">De fermentación</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center text-center gap-4 border m-4 rounded-2xl bg-gradiente-natural h-65 ">
                <div className="flex flex-col gap-2">
                    <span>🚀</span>
                    <h2 className="text-blanco font-semibold text-lg">¿Listo para transformar tu salud?</h2>
                    <p className="text-blanco-humo font-semibold">Únete a miles de peruanos que ya experimentan los beneficios del kéfir natural</p>
                </div>
                <button className="border rounded-xl p-2 w-70 bg-gradiente-natural">
                    🧬 Descubre TODO sobre el Kéfir
                </button>
                <button className="border rounded-xl p-2 w-70 bg-gradiente-natural">
                    🛒 Ver Productos
                </button>
            </div>
            
            <div className="m-4 rounded-2xl p-6 bg-blanco flex flex-col items-center gap-5">
                <div className="flex flex-col gap-3">
                    <div className="text-center">
                        <h2 className="text-lg text-texto font-bold">✨ ¿Por qué elegir Naturalito?</h2>
                        <span className="text-sm text-parrafo">Tu salud merece lo mejor</span>
                    </div>
                    <div className="w-70 bg-verde-claro rounded-2xl flex flex-col gap-1 justify-center items-center p-4">
                        <span className="bg-rosa p-2 rounded-full">🌱</span>
                        <p className="text-sm font-semibold">100% Natural</p>
                        <p className="text-sm text-parrafo">Sin químicos ni conservantes</p>
                    </div>
                    <div className="w-70 bg-verde-claro rounded-2xl flex flex-col gap-1 justify-center items-center p-4">
                        <span className="bg-rosa p-2 rounded-full">🚚</span>
                        <p className="text-sm font-semibold">Entrega Rápida</p>
                        <p className="text-sm text-parrafo">Llegamos a todo el Perú</p>
                    </div>
                    <div className="w-70 bg-verde-claro rounded-2xl flex flex-col gap-1 justify-center items-center p-4">
                        <span className="bg-rosa p-2 rounded-full">🛡️</span>
                        <p className="text-sm font-semibold">Calidad Asegurada</p>
                        <p className="text-sm text-parrafo">Productos de calidad</p>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-verde font-bold">Más clientes satisfechos en todo el Perú</p>
                </div>
            </div>
            {/* =========================================TIPOS DE ENTREGA========================================== */}
            <div className=" m-4 flex flex-col gap-10 justify-center items-center text-center">
                <div className="flex flex-col gap-5  w-80 mt-20 ">
                    <h1 className="text-4xl font-bold">🚚 Tipos de <span className="text-verde">Entrega</span></h1>
                    <p className="text-parrafo text-xl">Elige el método de entrega que mejor se adapte a ti</p>
                </div>

                <div className="bg-blanco rounded-2xl p-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-5 mt-6 ">
                        <div>
                            <span className="p-5 text-4xl bg-verde-claro rounded-full">🏠</span>

                        </div>
                        <h2 className="text-2xl font-semibold">Delivery Trujillo</h2>
                        <p className="text-parrafo font-semibold">Entrega a domicilio en distritos especificos</p>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl">
                        <p className="text-verde font-bold">Distritos disponibles:</p>
                        <p className="text-verde font-semibold ">Larco, La Ezperanza, Florencia de Mora, Porvenir</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex justify-around items-center text-verde w-70 ">
                            <p className="text-xl font-bold">Costo</p>
                            <p className="text-2xl font-semibold">S/. 15</p>
                        </div>
                        <div className="flex justify-around text-verde w-70 ">
                            <p className="text-xl font-bold">Tiempo:</p>
                            <p className="text-lg font-semibold">Mismo día o siguiente</p>
                        </div>
                        <button className="w-50 p-3 bg-gradiente-natural rounded-2xl">
                            🛒 Ver Productos
                        </button>
                    </div>
                </div>
                <div className="bg-blanco rounded-2xl p-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-5 mt-6 ">
                        <div>
                            <span className="px-5 py-3 text-4xl bg-verde-claro rounded-full">📍</span>

                        </div>
                        <h2 className="text-2xl font-semibold">Puntos de encuentro</h2>
                        <p className="text-parrafo font-semibold">Encuentros en el centro Historico de Trujillo</p>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl">
                        <p className="text-verde font-bold">🎉 Plazuela El Recreo</p>
                        <p className="text-verde font-semibold ">GRATIS - Previa coordinación por WhatsApp</p>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl">
                        <p className="text-verde font-bold">🎉 Plaza Armas de Trujillo - S/5</p>
                        <p className="text-verde font-semibold ">9-12am || 3-6pm</p>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl">
                        <p className="text-verde font-bold">🎉 C.C Portal Pizarro - S/5</p>
                        <p className="text-verde font-semibold ">9-12am || 3-6pm</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <button className="w-50 p-3 bg-gradiente-natural rounded-2xl">
                            🛒 Ver Productos
                        </button>
                    </div>
                </div>
                <div className="bg-blanco rounded-2xl p-8 flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-5 mt-6 ">
                        <div>
                            <span className="px-5 py-3 text-4xl bg-verde-claro rounded-full">💡</span>

                        </div>
                        <h2 className="text-2xl font-semibold">Información Importante sobre Envíos</h2>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl flex flex-col gap-2 w-70">
                        <p className="text-3xl">💳</p>
                        <p className="text-verde font-black">Pago</p>
                        <p className="text-verde font-semibold ">50% de adelanto siempre. Saldo restante al enviar tu pedido.</p>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl flex flex-col gap-2 w-70">
                        <p className="text-3xl">📱</p>
                        <p className="text-verde font-black">Coordinación</p>
                        <p className="text-verde font-semibold ">Todo se coordina por WhatsApp. Te mantenemos informado paso a paso.</p>
                    </div>
                    <div className="bg-rosa p-4 rounded-2xl flex flex-col gap-2 w-70">
                        <p className="text-3xl">🔒</p>
                        <p className="text-verde font-black">Seguridad</p>
                        <p className="text-verde font-semibold ">Compra con total confianza.</p>
                    </div>
                    
                </div>
            </div>
            {/* =================================== SECTION =========================================== */}

            <div className="bg-gradiente-natural-2 p-4 flex flex-col items-center gap-5 text-center ">
                
                <p className="text-5xl mt-7">✨</p>
                
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold ">🎯 ¿Listo para transformar tu salud?</h1>
                    <div className="font-medium">
                        <p>Únete a los peruanos que ya mejoraron su digestión</p>
                        <p>con nuestros búlgaros auténticos</p> 
                    </div>
                </div>
                
                <button className="p-6 bg-blanco-humo rounded-2xl text-verde font-bold text-xl">
                    🚀 Comenzar Mi Transformación Ahora
                </button>
                
            
                <div className="flex justify-around items-center gap-4 font-bold">
                    <div className="flex items-center gap-1">
                        <CiCircleCheck size={18} strokeWidth={1.5}/>
                        <p>Envío seguro</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiCircleCheck size={18} strokeWidth={1.5}/>
                        <p>Compra segura</p>
                    </div>
                </div>
               
                <button className="flex items-center gap-4 p-4 bg-green-400/80 rounded-2xl text-md font-bold mb-7">
                    <FaWhatsapp  size={30} color="green" strokeWidth={1.5}/>
                    WhatsApp: +51 936 335 903
                </button>

            </div>
            

        </div>
    );
}
