import { FaWhatsapp } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";
import { GiMilkCarton } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { BiSolidFridge } from "react-icons/bi";

export default function KefirPage() {

    const handleComprarAhora = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    const handleDeslizar = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    const handleWhatsApp = () => {
        const mensaje = "Hola! Quiero información sobre los búlgaros y kéfir de Naturalito";
        const url = `https://wa.me/51936335903?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-fondo">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-gradiente-natural-3">
                <div className="flex flex-col gap-6 max-w-3xl">
                    <span className="text-6xl">🧬</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-texto">
                        Descubre el poder del <span className="text-verde">Kéfir</span>
                    </h1>
                    <p className="text-xl text-parrafo">
                        La bebida probiótica milenaria que transforma tu salud intestinal
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <button
                            onClick={handleComprarAhora}
                            className="px-8 py-4 bg-gradiente-natural text-blanco rounded-2xl 
                                     font-bold text-lg hover:opacity-90 transition-all duration-200
                                     shadow-lg hover:shadow-xl"
                        >
                            🛒 Compra ahora
                        </button>
                        <button
                            onClick={handleDeslizar}
                            className="px-8 py-4 bg-blanco text-verde rounded-2xl font-semibold
                                     border-2 border-verde hover:bg-verde hover:text-blanco
                                     transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            Desliza para descubrir
                            <IoArrowDown className="animate-bounce" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ¿Qué son los Búlgaros? */}
            <section className="px-4 py-16 max-w-6xl mx-auto">
                <div className="bg-blanco rounded-3xl p-8 md:p-12 shadow-lg">
                    <h2 className="text-4xl font-bold text-texto mb-6 text-center">
                        ¿Qué son los <span className="text-verde">Búlgaros</span>?
                    </h2>
                    <p className="text-lg text-parrafo leading-relaxed">
                        Los búlgaros, o nódulos de kéfir, son una combinación natural
                        de bacterias y levaduras que viven en simbiosis. Su aspecto es
                        similar a pequeños racimos blanquecinos o gelatinosos. Son ellos
                        los que hacen posible la fermentación, transformando la leche
                        en una bebida rica en vitaminas, minerales y probióticos.
                        Estos nódulos no se disuelven ni desaparecen: se multiplican
                        con cada fermentación, lo que permite producir kéfir de forma
                        continua y artesanal.
                    </p>
                </div>
            </section>

            {/* Imagen de Búlgaros */}
            <section className="px-4 py-8 max-w-4xl mx-auto">
                <div className="bg-blanco rounded-3xl overflow-hidden shadow-lg">
                    <div className="h-80 overflow-hidden">
                        <img
                            src="./bulgaro.jpg"
                            alt="Búlgaros de kéfir"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6 bg-verde text-blanco text-center">
                        <p className="text-2xl font-bold tracking-wide">
                            🦠 MICRO-ORGANISMOS VIVOS
                        </p>
                    </div>
                </div>
            </section>

            {/* Beneficios del Kéfir */}
            <section className="px-4 py-16 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-texto mb-4">
                        ✨ BENEFICIOS DEL <span className="text-verde">KÉFIR</span>
                    </h2>
                    <p className="text-lg text-parrafo max-w-3xl mx-auto">
                        El kéfir es una bebida probiótica, derivada de la fermentación de
                        bacterias y levaduras de la leche. Similar a un yogur líquido, es
                        rico en proteínas, ácidos grasos, ácido láctico, vitaminas y
                        minerales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blanco rounded-2xl p-8 shadow-md hover:shadow-xl 
                                  transition-all duration-300 hover:-translate-y-2">
                        <div className="text-5xl mb-4 text-center">🦠</div>
                        <p className="text-parrafo text-center leading-relaxed">
                            Mejora el equilibrio microbiano intestinal y ayuda en el proceso
                            digestivo enriqueciendo la flora intestinal.
                        </p>
                    </div>

                    <div className="bg-blanco rounded-2xl p-8 shadow-md hover:shadow-xl 
                                  transition-all duration-300 hover:-translate-y-2">
                        <div className="text-5xl mb-4 text-center">🥛</div>
                        <p className="text-parrafo text-center leading-relaxed">
                            Mejora la tolerancia a la lactosa, ideal para personas con
                            sensibilidad digestiva.
                        </p>
                    </div>

                    <div className="bg-blanco rounded-2xl p-8 shadow-md hover:shadow-xl 
                                  transition-all duration-300 hover:-translate-y-2">
                        <div className="text-5xl mb-4 text-center">🛡️</div>
                        <p className="text-parrafo text-center leading-relaxed">
                            Fortalece el sistema inmune con minerales, vitaminas y proteínas
                            esenciales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cuidado de los Búlgaros */}
            <section className="px-4 py-16 bg-verde-claro/30">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-blanco rounded-3xl p-8 md:p-12 shadow-lg mb-8">
                        <h2 className="text-4xl font-bold text-texto mb-4 text-center">
                            💚 CUIDADO DE MIS <span className="text-verde">BULGARITOS</span>
                        </h2>
                        <p className="text-lg text-parrafo text-center max-w-3xl mx-auto">
                            Es fundamental utilizar recipientes de vidrio o de plástico y
                            evitar los metales, y alimentarlos regularmente con leche.
                        </p>
                    </div>

                    {/* Guía de Cuidados */}
                    <div className="bg-rosa rounded-3xl p-8 md:p-12 mb-8">
                        <h3 className="text-2xl font-bold text-verde mb-8 text-center">
                            📋 Guía de Cuidados
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Alimentación */}
                            <div className="bg-blanco rounded-2xl p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-verde-claro rounded-full 
                                                  flex items-center justify-center">
                                        <GiMilkCarton size={28} className="text-verde" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-texto mb-2">
                                        Alimentación
                                    </h4>
                                    <p className="text-parrafo">
                                        Usar leche fresca cada 24 - 48 horas (NO MÁS)
                                    </p>
                                </div>
                            </div>

                            {/* Utensilios */}
                            <div className="bg-blanco rounded-2xl p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-verde-claro rounded-full 
                                                  flex items-center justify-center">
                                        <span className="text-3xl">🥄</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-texto mb-2">
                                        Utensilios
                                    </h4>
                                    <p className="text-parrafo">
                                        Vidrio, plástico o madera. Evita el metal.
                                    </p>
                                </div>
                            </div>

                            {/* Higiene */}
                            <div className="bg-blanco rounded-2xl p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-verde-claro rounded-full 
                                                  flex items-center justify-center">
                                        <MdCleaningServices size={28} className="text-verde" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-texto mb-2">
                                        Higiene
                                    </h4>
                                    <p className="text-parrafo">
                                        Limpia bien los recipientes y utensilios antes de usar.
                                    </p>
                                </div>
                            </div>

                            {/* Condiciones */}
                            <div className="bg-blanco rounded-2xl p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-verde-claro rounded-full 
                                                  flex items-center justify-center">
                                        <span className="text-3xl">🌡️</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-texto mb-2">
                                        Condiciones
                                    </h4>
                                    <p className="text-parrafo mb-2">
                                        Mantener en un lugar fresco y sin luz directa.
                                    </p>
                                    <p className="text-parrafo text-sm">
                                        Cubrir el recipiente permitiendo el ingreso
                                        del aire pero protegido del polvo e insectos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Descanso */}
                    <div className="bg-verde rounded-3xl p-8 md:p-12 text-center shadow-lg">
                        <div className="flex justify-center mb-4">
                            <BiSolidFridge size={60} className="text-blanco" />
                        </div>
                        <h3 className="text-2xl font-bold text-blanco mb-4">
                            ❄️ PARA TOMAR UN DESCANSO...
                        </h3>
                        <p className="text-blanco-humo text-lg max-w-2xl mx-auto">
                            Refrigera tus bulgaritos en un recipiente de vidrio con leche.
                            Así podrán descansar hasta por 2 semanas sin problema.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="px-4 py-16 max-w-4xl mx-auto">
                <div className="bg-gradiente-natural rounded-3xl p-12 text-center shadow-2xl">
                    <span className="text-6xl mb-6 block">🌟</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-blanco mb-4">
                        ¿Listo para comenzar tu viaje con el Kéfir?
                    </h2>
                    <p className="text-blanco-humo text-lg mb-8">
                        Únete a cientos de peruanos que ya transformaron su salud
                    </p>
                    <button
                        onClick={handleWhatsApp}
                        className="flex items-center justify-center gap-3 mx-auto px-8 py-4 
                                 bg-green-500 text-white rounded-2xl font-bold text-lg 
                                 hover:bg-green-600 transition-all duration-200 shadow-lg"
                    >
                        <FaWhatsapp size={30} />
                        Contactar por WhatsApp
                    </button>
                </div>
            </section>
        </div>
    );
}