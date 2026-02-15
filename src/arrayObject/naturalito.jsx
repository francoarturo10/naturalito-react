export const categorias = [
    { id: 1, nombre: "Helados" },
    { id: 2, nombre: "Kefir" },
    { id: 3, nombre: "Búlgaros" }
];

export const subcategorias = [
    // Helados
    { id: 1, categoriaId: 1, nombre: "Adoquines" },
    { id: 2, categoriaId: 1, nombre: "Paletas" },
    { id: 3, categoriaId: 1, nombre: "Marcianos" },

    // Kefir
    { id: 4, categoriaId: 2, nombre: "1lt con fruta" },
    { id: 5, categoriaId: 2, nombre: "1/2lt con fruta" },
    { id: 6, categoriaId: 2, nombre: "1lt" },
    { id: 7, categoriaId: 2, nombre: "1/2lt" },

    // Búlgaros
    { id: 8, categoriaId: 3, nombre: "10 gramos" },
    { id: 9, categoriaId: 3, nombre: "15 gramos" },
    { id: 10, categoriaId: 3, nombre: "20 gramos" },
];

export const productos = [
    // Helados - Adoquin
    { 
        id: 1, 
        categoriaId: 1, 
        subcategoriaId: 1, 
        nombre: "Adoquín Mango", 
        precio: 2,
        descripcion: "Delicioso helado en formato adoquín con intenso sabor a mango peruano. Refrescante y natural, perfecto para cualquier momento del día."
    },
    { 
        id: 2, 
        categoriaId: 1, 
        subcategoriaId: 1, 
        nombre: "Adoquín Fresa", 
        precio: 2,
        descripcion: "Helado cremoso de fresa en presentación adoquín. Elaborado con fresas frescas para un sabor auténtico y delicioso."
    },
    
    // Helados - Paletas
    { 
        id: 3, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Café", 
        precio: 3.5,
        descripcion: "Paleta de helado con sabor a café intenso. Ideal para los amantes del café que buscan un postre refrescante y energizante."
    },
    { 
        id: 4, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Mango", 
        precio: 3.5,
        descripcion: "Paleta de helado de mango tropical. Dulce, refrescante y con todo el sabor natural de la fruta peruana."
    },
    { 
        id: 5, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Fresa", 
        precio: 3.5,
        descripcion: "Paleta cremosa de fresa natural. Un clásico irresistible con pedacitos de fruta que le dan textura y sabor auténtico."
    },
    { 
        id: 6, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Lúcuma", 
        precio: 3.5,
        descripcion: "Paleta con el tradicional sabor peruano de lúcuma. Cremosa, dulce y con ese toque único que solo la lúcuma puede dar."
    },
    { 
        id: 7, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Oreo", 
        precio: 3.5,
        descripcion: "Paleta de helado de vainilla con trozos de galleta Oreo. La combinación perfecta entre cremosidad y el crunch de las galletas."
    },
    { 
        id: 8, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Plátano", 
        precio: 3.5,
        descripcion: "Paleta de helado con sabor a plátano maduro. Suave, dulce y naturalmente deliciosa, ideal para toda la familia."
    },
    { 
        id: 9, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Pie de Limón", 
        precio: 5,
        descripcion: "Paleta gourmet inspirada en el clásico pie de limón. Combina la cremosidad del helado con el toque cítrico y dulce de la galleta."
    },
    { 
        id: 10, 
        categoriaId: 1, 
        subcategoriaId: 2, 
        nombre: "Paleta Piña Colada", 
        precio: 5,
        descripcion: "Paleta tropical con sabor a piña colada. La mezcla perfecta de piña y coco que te transporta a la playa en cada mordida."
    },
    
    // Helados - Marcianos
    { 
        id: 11, 
        categoriaId: 1, 
        subcategoriaId: 3, 
        nombre: "Marciano Tamarindo", 
        precio: 1.5,
        descripcion: "Refrescante marciano de tamarindo. Sabor agridulce y único, perfecto para los días calurosos. Un clásico peruano."
    },
    { 
        id: 12, 
        categoriaId: 1, 
        subcategoriaId: 3, 
        nombre: "Marciano Mango", 
        precio: 1.5,
        descripcion: "Marciano de mango dulce y tropical. Económico, refrescante y lleno de sabor natural. Ideal para niños y adultos."
    },
    { 
        id: 13, 
        categoriaId: 1, 
        subcategoriaId: 3, 
        nombre: "Marciano Maracuyá", 
        precio: 1.5,
        descripcion: "Marciano con el intenso sabor del maracuyá peruano. Ácido, dulce y extremadamente refrescante. ¡Una explosión de sabor!"
    },

    // Kefir
    { 
        id: 14, 
        categoriaId: 2, 
        subcategoriaId: 4, 
        nombre: "Kefir 1lt Mango", 
        precio: 16,
        descripcion: "Kefir probiótico de 1 litro con delicioso sabor a mango. Rico en bacterias beneficiosas para tu flora intestinal. Mejora tu digestión naturalmente."
    },
    { 
        id: 15, 
        categoriaId: 2, 
        subcategoriaId: 4, 
        nombre: "Kefir 1lt Fresa", 
        precio: 16,
        descripcion: "Kefir de 1 litro con fresa natural. Bebida fermentada rica en probióticos que fortalece tu sistema inmune y mejora tu salud digestiva."
    },
    { 
        id: 16, 
        categoriaId: 2, 
        subcategoriaId: 5, 
        nombre: "Kefir 1/2lt Fresa", 
        precio: 14,
        descripcion: "Medio litro de kefir con fresa. Tamaño perfecto para probar o para una persona. Mismo sabor delicioso y beneficios probióticos."
    },
    { 
        id: 17, 
        categoriaId: 2, 
        subcategoriaId: 5, 
        nombre: "Kefir 1/2lt Mango", 
        precio: 14,
        descripcion: "Kefir de medio litro con mango tropical. Presentación ideal para consumo individual. Todos los beneficios del kefir en un tamaño práctico."
    },
    { 
        id: 18, 
        categoriaId: 2, 
        subcategoriaId: 6, 
        nombre: "Kefir 1lt Solo", 
        precio: 13,
        descripcion: "Kefir natural de 1 litro sin saborizantes. Sabor auténtico y puro. Ideal para quienes prefieren el kefir tradicional o para agregar a smoothies."
    },
    { 
        id: 19, 
        categoriaId: 2, 
        subcategoriaId: 7, 
        nombre: "Kefir 1/2lt Solo", 
        precio: 10,
        descripcion: "Medio litro de kefir natural sin endulzar. Perfecto para iniciarte en el mundo de los probióticos con el sabor original y auténtico."
    },

    // Búlgaros
    { 
        id: 20, 
        categoriaId: 3, 
        subcategoriaId: 8, 
        nombre: "Búlgaros 10g", 
        precio: 8,
        descripcion: "10 gramos de búlgaros vivos y activos. Cantidad ideal para comenzar a producir tu propio kefir en casa. Incluye instrucciones de cultivo y cuidado."
    },
    { 
        id: 21, 
        categoriaId: 3, 
        subcategoriaId: 9, 
        nombre: "Búlgaros 15g", 
        precio: 10,
        descripcion: "15 gramos de búlgaros de leche. Perfectos para producir kefir de forma más rápida. Se reproducen y crecen con cada fermentación."
    },
    { 
        id: 22, 
        categoriaId: 3, 
        subcategoriaId: 10, 
        nombre: "Búlgaros 20g", 
        precio: 14,
        descripcion: "20 gramos de búlgaros frescos. Cantidad generosa para empezar con mayor producción de kefir. 100% naturales, cultivados con amor y dedicación."
    }
];