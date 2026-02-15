import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

// Componente Acordeón
function Accordion({ title, children, isOpen, onToggle }) {
    return (
        <div className="bg-blanco rounded-2xl shadow-md overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left 
                         hover:bg-rosa transition-colors duration-200"
            >
                <h3 className="text-lg md:text-xl font-semibold text-texto pr-4">
                    {title}
                </h3>
                <IoChevronDown 
                    size={24} 
                    className={`text-verde flex-shrink-0 transition-transform duration-300 
                              ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out
                          ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 py-5 bg-verde-claro/20 border-t border-verde-claro">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function DudasPage() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleWhatsApp = () => {
        const mensaje = "Hola! Tengo algunas dudas sobre los búlgaros y kéfir de Naturalito";
        const url = `https://wa.me/51936335903?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-fondo min-h-screen">
            {/* Hero Section */}
            <section className="px-4 py-16 text-center bg-gradiente-natural-3">
                <div className="max-w-4xl mx-auto">
                    <span className="text-6xl mb-4 block">❓</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-texto mb-4">
                        ¿Tienes <span className="text-verde">Dudas</span>?
                    </h1>
                    <p className="text-xl text-parrafo max-w-2xl mx-auto">
                        Encuentra respuestas a las preguntas más frecuentes sobre búlgaros, 
                        kéfir y nuestros productos
                    </p>
                </div>
            </section>

            {/* Acordeones de Preguntas */}
            <section className="px-4 py-16 max-w-4xl mx-auto">
                <div className="flex flex-col gap-4">
                    
                    {/* Sobre los Búlgaros */}
                    <Accordion
                        title="🧬 Sobre los Búlgaros"
                        isOpen={openSection === 'bulgaros'}
                        onToggle={() => toggleSection('bulgaros')}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Qué son exactamente los búlgaros de kéfir?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Los búlgaros son una combinación simbiótica de bacterias beneficiosas 
                                    y levaduras (SCOBY) que fermentan la leche para producir kéfir. Tienen 
                                    un aspecto de pequeñas coliflores blancas o amarillentas y están vivos.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Los búlgaros son reutilizables?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    ¡Sí! Los búlgaros se reproducen y crecen con cada fermentación. 
                                    Con el cuidado adecuado, puedes usarlos indefinidamente y tener 
                                    kéfir fresco todos los días de por vida.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cuánto kéfir puedo producir con mis búlgaros?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Con 10-15g de búlgaros puedes fermentar aproximadamente 250-500ml de 
                                    leche en 24 horas. A medida que crecen, podrás producir más cantidad 
                                    o regalar el excedente a familiares y amigos.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cuál es la diferencia entre búlgaros y yogur?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Los búlgaros contienen más de 30 cepas diferentes de bacterias y 
                                    levaduras beneficiosas, mientras que el yogur tiene entre 2-7 cepas. 
                                    El kéfir es más completo probioticamente y ligeramente efervescente.
                                </p>
                            </div>
                        </div>
                    </Accordion>

                    {/* Beneficios para la Salud */}
                    <Accordion
                        title="💪 Beneficios para la Salud"
                        isOpen={openSection === 'beneficios'}
                        onToggle={() => toggleSection('beneficios')}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Qué beneficios tiene tomar kéfir diariamente?
                                </h4>
                                <ul className="text-parrafo leading-relaxed space-y-2 ml-5">
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">•</span>
                                        <span>Mejora la digestión y alivia problemas intestinales</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">•</span>
                                        <span>Fortalece el sistema inmunológico</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">•</span>
                                        <span>Reduce la intolerancia a la lactosa</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">•</span>
                                        <span>Aporta vitaminas B, K2, calcio y magnesio</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">•</span>
                                        <span>Ayuda a mantener el equilibrio de la flora intestinal</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Puedo tomar kéfir si soy intolerante a la lactosa?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Sí, generalmente. Durante la fermentación, las bacterias consumen 
                                    gran parte de la lactosa de la leche. Muchas personas intolerantes 
                                    pueden consumir kéfir sin problemas. Te recomendamos empezar con 
                                    pequeñas cantidades y observar cómo te sientes.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cuánto kéfir debo tomar al día?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Se recomienda comenzar con 100-200ml al día e ir aumentando 
                                    gradualmente hasta 1 taza (250ml) o más. Es mejor consumirlo 
                                    en ayunas o entre comidas para mejores resultados.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Hay contraindicaciones?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    El kéfir es seguro para la mayoría de personas. Sin embargo, si 
                                    tienes un sistema inmune comprometido o alergias severas a lácteos, 
                                    consulta con tu médico antes de consumirlo.
                                </p>
                            </div>
                        </div>
                    </Accordion>

                    {/* Cuidado y Preparación */}
                    <Accordion
                        title="🥛 Cuidado y Preparación"
                        isOpen={openSection === 'cuidado'}
                        onToggle={() => toggleSection('cuidado')}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cómo preparo mi kéfir en casa?
                                </h4>
                                <ol className="text-parrafo leading-relaxed space-y-2 ml-5 list-decimal">
                                    <li>Coloca los búlgaros en un frasco de vidrio limpio</li>
                                    <li>Agrega leche fresca (250-500ml por cada 10-15g de búlgaros)</li>
                                    <li>Cubre con tela o papel, NO cierres herméticamente</li>
                                    <li>Deja fermentar 24-48 horas a temperatura ambiente</li>
                                    <li>Cuela el kéfir y separa los búlgaros</li>
                                    <li>Los búlgaros van de nuevo a fermentar, el kéfir está listo para tomar</li>
                                </ol>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Qué tipo de leche debo usar?
                                </h4>
                                <p className="text-parrafo leading-relaxed mb-2">
                                    La mejor opción es leche fresca entera. También puedes usar:
                                </p>
                                <ul className="text-parrafo leading-relaxed space-y-1 ml-5">
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">✓</span>
                                        <span>Leche descremada o semi-descremada</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">✓</span>
                                        <span>Leche de cabra (produce kéfir más suave)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">✗</span>
                                        <span>Evita leche ultra-pasteurizada o deslactosada</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Por qué NO debo usar utensilios de metal?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    El metal puede reaccionar con los ácidos del kéfir y afectar a los 
                                    búlgaros. Usa siempre utensilios de plástico, madera o silicona, y 
                                    frascos de vidrio para almacenar.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cómo sé si mi kéfir está listo?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    El kéfir está listo cuando la leche se espesa y adquiere un sabor 
                                    ligeramente ácido. Si lo agitas suavemente, debe tener consistencia 
                                    similar al yogur líquido. En 24-48 horas a temperatura ambiente 
                                    (18-25°C) debería estar perfecto.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Qué hago si me voy de vacaciones?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Coloca tus búlgaros en un frasco con leche y guárdalos en el 
                                    refrigerador. Pueden descansar así hasta 2-3 semanas. Al regresar, 
                                    haz 2-3 fermentaciones de "reactivación" antes de consumir el kéfir.
                                </p>
                            </div>
                        </div>
                    </Accordion>

                    {/* Envíos y Entrega */}
                    <Accordion
                        title="🚚 Envíos y Entrega"
                        isOpen={openSection === 'envios'}
                        onToggle={() => toggleSection('envios')}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿A dónde hacen envíos?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Realizamos entregas en toda la ciudad de Trujillo mediante:
                                </p>
                                <ul className="text-parrafo leading-relaxed space-y-2 ml-5 mt-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">🏠</span>
                                        <span><strong>Delivery a domicilio:</strong> Distritos de Trujillo, La Esperanza, 
                                        Florencia de Mora y El Porvenir (S/ 15)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-verde">📍</span>
                                        <span><strong>Puntos de encuentro:</strong> Plazuela El Recreo (GRATIS), 
                                        Plaza de Armas y C.C Portal Pizarro (S/ 5)</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cuánto tiempo demora la entrega?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Las entregas a domicilio se realizan el mismo día o al día siguiente 
                                    dependiendo del horario de tu pedido. Los puntos de encuentro se 
                                    coordinan por WhatsApp según disponibilidad.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cómo llegan los búlgaros?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Los búlgaros llegan frescos, en un recipiente con leche para mantenerlos 
                                    activos durante el traslado. Incluyen instrucciones completas de cuidado 
                                    y preparación para que empieces de inmediato.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Los búlgaros sobreviven al envío?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    ¡Absolutamente! Los búlgaros son muy resistentes. Los empaquetamos 
                                    cuidadosamente con leche fresca para que lleguen en perfectas condiciones 
                                    y listos para usar.
                                </p>
                            </div>
                        </div>
                    </Accordion>

                    {/* Pagos y Precios */}
                    <Accordion
                        title="💳 Pagos y Precios"
                        isOpen={openSection === 'pagos'}
                        onToggle={() => toggleSection('pagos')}
                    >
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Cuánto cuestan los búlgaros?
                                </h4>
                                <div className="bg-blanco rounded-xl p-4 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-parrafo font-semibold">10 gramos:</span>
                                        <span className="text-verde text-xl font-bold">S/ 8</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-parrafo font-semibold">15 gramos:</span>
                                        <span className="text-verde text-xl font-bold">S/ 10</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-parrafo font-semibold">20 gramos:</span>
                                        <span className="text-verde text-xl font-bold">S/ 14</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Qué métodos de pago aceptan?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Aceptamos transferencias bancarias, Yape y Plin. Todo se coordina 
                                    fácilmente por WhatsApp.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Debo pagar todo por adelantado?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Solicitamos el 50% de adelanto al confirmar tu pedido. El saldo 
                                    restante se paga al momento de recibir tu producto. Esto garantiza 
                                    el compromiso de ambas partes.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿Ofrecen garantía?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    Todos nuestros búlgaros están garantizados como organismos vivos y 
                                    activos. Si tienes algún problema, contáctanos por WhatsApp y te 
                                    ayudaremos a solucionarlo. Incluimos soporte completo para que 
                                    tengas éxito con tu kéfir.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-texto mb-2">
                                    ¿El precio incluye el envío?
                                </h4>
                                <p className="text-parrafo leading-relaxed">
                                    No, el costo de envío es adicional según el método elegido: 
                                    S/ 15 para delivery a domicilio, S/ 5 para puntos de encuentro 
                                    en Plaza de Armas o Portal Pizarro, y GRATIS en Plazuela El Recreo.
                                </p>
                            </div>
                        </div>
                    </Accordion>

                </div>
            </section>

            {/* CTA Final */}
            <section className="px-4 py-16 max-w-4xl mx-auto">
                <div className="bg-gradiente-natural rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                    <span className="text-5xl mb-4 block">💬</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-blanco mb-4">
                        ¿Aún tienes dudas?
                    </h2>
                    <p className="text-blanco-humo text-lg mb-6">
                        Estamos aquí para ayudarte. Contáctanos directamente por WhatsApp 
                        y resolveremos todas tus preguntas
                    </p>
                    <button 
                        onClick={handleWhatsApp}
                        className="flex items-center justify-center gap-3 mx-auto px-8 py-4 
                                 bg-green-500 text-white rounded-2xl font-bold text-lg 
                                 hover:bg-green-600 transition-all duration-200 shadow-lg"
                    >
                        <FaWhatsapp size={30} />
                        Preguntar por WhatsApp
                    </button>
                </div>
            </section>
        </div>
    );
}