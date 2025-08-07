interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}


export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Laptop Gamer",
    price: 1500,
    description: "Potente laptop para juegos de alto rendimiento.",
    image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg"
  },
  {
    id: 2,
    name: "Teclado Mecánico",
    price: 120,
    description: "Teclado con switches para una mejor experiencia de escritura.",
    image: "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg"
  },
  {
    id: 3,
    name: "Monitor 4K",
    price: 450,
    description: "Monitor de 27 pulgadas con resolución 4K.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
  },
  {
    id: 4,
    name: "Mouse Ergonómico",
    price: 65,
    description: "Diseñado para reducir la tensión en la muñeca durante largas sesiones.",
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
  },
  {
    id: 5,
    name: "Webcam Full HD",
    price: 85,
    description: "Ideal para videoconferencias y streaming de alta calidad.",
    image: "https://images.pexels.com/photos/27574914/pexels-photo-27574914.jpeg"
  },
  {
    id: 6,
    name: "Auriculares Inalámbricos",
    price: 180,
    description: "Cancelación de ruido activa y sonido de alta fidelidad.",
    image: "https://images.pexels.com/photos/33242733/pexels-photo-33242733.jpeg"}]
//   } ]
//   {
//     id: 7,
//     name: "Micrófono USB",
//     price: 90,
//     description: "Captura tu voz con claridad para podcasts o grabaciones.",
//     image: "https://via.placeholder.com/150?text=Microfono+USB"
//   },
//   {
//     id: 8,
//     name: "Disco Duro Externo 2TB",
//     price: 110,
//     description: "Almacena todos tus archivos importantes de forma segura.",
//     image: "https://via.placeholder.com/150?text=Disco+Duro+2TB"
//   },
//   {
//     id: 9,
//     name: "Router Wi-Fi 6",
//     price: 150,
//     description: "Conexión a internet ultrarrápida y estable para tu hogar.",
//     image: "https://via.placeholder.com/150?text=Router+WiFi+6"
//   },
//   {
//     id: 10,
//     name: "Silla de Oficina Ergonómica",
//     price: 250,
//     description: "Soporte lumbar ajustable para largas jornadas de trabajo.",
//     image: "https://via.placeholder.com/150?text=Silla+Oficina"
//   },
//   // ... (otros 90 elementos con datos ficticios)
//   {
//     id: 11,
//     name: "Batería Portátil 20000mAh",
//     price: 50,
//     description: "Carga tu smartphone y tablet varias veces sobre la marcha.",
//     image: "https://via.placeholder.com/150?text=Power+Bank"
//   },
//   {
//     id: 12,
//     name: "Smartwatch Deportivo",
//     price: 200,
//     description: "Monitorea tu actividad física y notificaciones.",
//     image: "https://via.placeholder.com/150?text=Smartwatch"
//   },
//   {
//     id: 13,
//     name: "Altavoz Bluetooth Portátil",
//     price: 75,
//     description: "Sonido potente en un diseño compacto y resistente al agua.",
//     image: "https://via.placeholder.com/150?text=Altavoz+BT"
//   },
//   {
//     id: 14,
//     name: "Proyector Mini",
//     price: 190,
//     description: "Convierte cualquier pared en una pantalla de cine.",
//     image: "https://via.placeholder.com/150?text=Proyector+Mini"
//   },
//   {
//     id: 15,
//     name: "Drone con Cámara 4K",
//     price: 500,
//     description: "Captura increíbles tomas aéreas con facilidad.",
//     image: "https://via.placeholder.com/150?text=Drone"
//   },
//   {
//     id: 16,
//     name: "Licuadora de Alta Velocidad",
//     price: 130,
//     description: "Prepara smoothies y sopas cremosas en segundos.",
//     image: "https://via.placeholder.com/150?text=Licuadora"
//   },
//   {
//     id: 17,
//     name: "Cafetera Programable",
//     price: 95,
//     description: "Despierta con el aroma de café recién hecho.",
//     image: "https://via.placeholder.com/150?text=Cafetera"
//   },
//   {
//     id: 18,
//     name: "Set de Cuchillos de Chef",
//     price: 80,
//     description: "Cuchillos de acero inoxidable de alta calidad para tu cocina.",
//     image: "https://via.placeholder.com/150?text=Set+Cuchillos"
//   },
//   {
//     id: 19,
//     name: "Freidora de Aire",
//     price: 115,
//     description: "Comidas crujientes y saludables con menos aceite.",
//     image: "https://via.placeholder.com/150?text=Freidora+Aire"
//   },
//   {
//     id: 20,
//     name: "Aspiradora Robot",
//     price: 320,
//     description: "Limpia tus pisos automáticamente, incluso cuando no estás en casa.",
//     image: "https://via.placeholder.com/150?text=Aspiradora+Robot"
//   },
//   { id: 21, name: "Tabla de cortar de bambú", price: 30, description: "Tabla duradera y ecológica para la cocina.", image: "https://via.placeholder.com/150?text=Tabla" },
//   { id: 22, name: "Set de sartenes antiadherentes", price: 90, description: "Cocina sin que nada se pegue, fácil de limpiar.", image: "https://via.placeholder.com/150?text=Sartenes" },
//   { id: 23, name: "Tostadora retro", price: 45, description: "Estilo vintage para tu desayuno.", image: "https://via.placeholder.com/150?text=Tostadora" },
//   { id: 24, name: "Hervidor eléctrico", price: 35, description: "Hierve agua en minutos para tus infusiones.", image: "https://via.placeholder.com/150?text=Hervidor" },
//   { id: 25, name: "Exprimidor de cítricos", price: 25, description: "Jugo fresco en segundos.", image: "https://via.placeholder.com/150?text=Exprimidor" },
//   { id: 26, name: "Horno de microondas", price: 150, description: "Calienta y cocina tus alimentos con rapidez.", image: "https://via.placeholder.com/150?text=Microondas" },
//   { id: 27, name: "Manta térmica", price: 60, description: "Cálida y acogedora para los días fríos.", image: "https://via.placeholder.com/150?text=Manta+Termica" },
//   { id: 28, name: "Máquina de coser", price: 180, description: "Ideal para proyectos de costura y reparaciones.", image: "https://via.placeholder.com/150?text=Maquina+Coser" },
//   { id: 29, name: "Set de herramientas para el hogar", price: 70, description: "Todo lo que necesitas para pequeñas reparaciones.", image: "https://via.placeholder.com/150?text=Set+Herramientas" },
//   { id: 30, name: "Taladro percutor", price: 100, description: "Potente y versátil para cualquier tarea.", image: "https://via.placeholder.com/150?text=Taladro" },
//   { id: 31, name: "Sierra circular", price: 140, description: "Cortes precisos y rápidos en madera.", image: "https://via.placeholder.com/150?text=Sierra" },
//   { id: 32, name: "Lijadora orbital", price: 85, description: "Acabados suaves y uniformes en tus proyectos.", image: "https://via.placeholder.com/150?text=Lijadora" },
//   { id: 33, name: "Juego de destornilladores", price: 20, description: "Variedad de tamaños para todas tus necesidades.", image: "https://via.placeholder.com/150?text=Destornilladores" },
//   { id: 34, name: "Organizador de cables", price: 15, description: "Mantén tus cables ordenados y sin enredos.", image: "https://via.placeholder.com/150?text=Organizador+Cables" },
//   { id: 35, name: "Enfriador de CPU", price: 60, description: "Mantiene tu procesador a una temperatura óptima.", image: "https://via.placeholder.com/150?text=Enfriador+CPU" },
//   { id: 36, name: "Cámara de Seguridad WiFi", price: 95, description: "Vigila tu hogar desde cualquier lugar.", image: "https://via.placeholder.com/150?text=Camara+Seguridad" },
//   { id: 37, name: "Smart Lock para Puerta", price: 160, description: "Abre y cierra tu puerta con tu smartphone.", image: "https://via.placeholder.com/150?text=Smart+Lock" },
//   { id: 38, name: "Bombilla Inteligente", price: 25, description: "Controla la iluminación de tu hogar con la voz.", image: "https://via.placeholder.com/150?text=Bombilla+Inteligente" },
//   { id: 39, name: "Termostato Inteligente", price: 180, description: "Controla la temperatura de tu hogar desde tu teléfono.", image: "https://via.placeholder.com/150?text=Termostato" },
//   { id: 40, name: "Asistente Virtual con Altavoz", price: 50, description: "Reproduce música y controla dispositivos inteligentes.", image: "https://via.placeholder.com/150?text=Asistente+Virtual" },
//   { id: 41, name: "Cafetera de Cápsulas", price: 80, description: "Prepara café de calidad con solo tocar un botón.", image: "https://via.placeholder.com/150?text=Cafetera+Capsulas" },
//   { id: 42, name: "Batidora de mano", price: 40, description: "Ideal para mezclas rápidas y sin ensuciar.", image: "https://via.placeholder.com/150?text=Batidora" },
//   { id: 43, name: "Vaporera eléctrica", price: 55, description: "Cocina al vapor de forma saludable y sin esfuerzo.", image: "https://via.placeholder.com/150?text=Vaporera" },
//   { id: 44, name: "Arrocera eléctrica", price: 45, description: "Arroz perfecto cada vez, sin supervisión.", image: "https://via.placeholder.com/150?text=Arrocera" },
//   { id: 45, name: "Sandwichera y grill", price: 35, description: "Prepara sándwiches y comidas a la parrilla.", image: "https://via.placeholder.com/150?text=Sandwichera" },
//   { id: 46, name: "Batidora de vaso", price: 70, description: "Ideal para batidos y zumos nutritivos.", image: "https://via.placeholder.com/150?text=Batidora+Vaso" },
//   { id: 47, name: "Procesador de alimentos", price: 120, description: "Corta, ralla y pica alimentos de forma rápida.", image: "https://via.placeholder.com/150?text=Procesador" },
//   { id: 48, name: "Picadora eléctrica", price: 30, description: "Pica verduras y carne con facilidad.", image: "https://via.placeholder.com/150?text=Picadora" },
//   { id: 49, name: "Báscula de cocina digital", price: 20, description: "Mediciones precisas para tus recetas.", image: "https://via.placeholder.com/150?text=Bascula" },
//   { id: 50, name: "Escáner portátil de documentos", price: 150, description: "Digitaliza tus documentos donde quiera que estés.", image: "https://via.placeholder.com/150?text=Escaner+Portatil" },
//   { id: 51, name: "Impresora Láser", price: 200, description: "Imprime documentos de forma rápida y eficiente.", image: "https://via.placeholder.com/150?text=Impresora+Laser" },
//   { id: 52, name: "Router de Malla", price: 280, description: "Cubre toda tu casa con una señal Wi-Fi potente.", image: "https://via.placeholder.com/150?text=Router+Malla" },
//   { id: 53, name: "Extensor de Rango Wi-Fi", price: 60, description: "Elimina las zonas muertas de tu conexión.", image: "https://via.placeholder.com/150?text=Extensor+WiFi" },
//   { id: 54, name: "Tarjeta de Video RTX 4070", price: 650, description: "Gráficos de siguiente generación para tus juegos.", image: "https://via.placeholder.com/150?text=RTX+4070" },
//   { id: 55, name: "Memoria RAM 16GB DDR5", price: 100, description: "Rendimiento mejorado para multitareas y juegos.", image: "https://via.placeholder.com/150?text=RAM+DDR5" },
//   { id: 56, name: "SSD NVMe 1TB", price: 90, description: "Cargas de sistema y juegos ultra rápidas.", image: "https://via.placeholder.com/150?text=SSD+NVMe" },
//   { id: 57, name: "Caja de PC para Gaming", price: 120, description: "Diseño con flujo de aire optimizado y estética moderna.", image: "https://via.placeholder.com/150?text=Caja+PC" },
//   { id: 58, name: "Fuente de Poder 750W", price: 85, description: "Energía estable y confiable para tus componentes.", image: "https://via.placeholder.com/150?text=Fuente+Poder" },
//   { id: 59, name: "Placa Base Z790", price: 250, description: "Soporte para los últimos procesadores y tecnologías.", image: "https://via.placeholder.com/150?text=Placa+Base" },
//   { id: 60, name: "Procesador Intel i7-13700K", price: 400, description: "Rendimiento excepcional para tareas exigentes.", image: "https://via.placeholder.com/150?text=Intel+i7" },
//   { id: 61, name: "Kit de Herramientas para Electrónica", price: 40, description: "Todo lo que necesitas para reparar dispositivos.", image: "https://via.placeholder.com/150?text=Kit+Electronica" },
//   { id: 62, name: "Estación de Soldadura", price: 60, description: "Herramienta esencial para trabajos de electrónica.", image: "https://via.placeholder.com/150?text=Soldador" },
//   { id: 63, name: "Lupa con Luz LED", price: 30, description: "Ideal para trabajos de precisión y lectura.", image: "https://via.placeholder.com/150?text=Lupa" },
//   { id: 64, name: "Multímetro Digital", price: 50, description: "Mide voltaje, corriente y resistencia.", image: "https://via.placeholder.com/150?text=Multimetro" },
//   { id: 65, name: "Cámara Instantánea", price: 90, description: "Imprime tus fotos al instante para recordar tus momentos.", image: "https://via.placeholder.com/150?text=Camara+Instantanea" },
//   { id: 66, name: "Álbum de Fotos", price: 20, description: "Guarda tus recuerdos de forma organizada.", image: "https://via.placeholder.com/150?text=Album+Fotos" },
//   { id: 67, name: "Marco Digital de Fotos", price: 70, description: "Muestra tus fotos favoritas en un bucle continuo.", image: "https://via.placeholder.com/150?text=Marco+Digital" },
//   { id: 68, name: "Kit de Limpieza de Lentes", price: 15, description: "Mantén tus lentes de cámara libres de polvo y huellas.", image: "https://via.placeholder.com/150?text=Kit+Limpieza" },
//   { id: 69, name: "Tripode Flexible", price: 25, description: "Captura fotos y videos estables desde cualquier ángulo.", image: "https://via.placeholder.com/150?text=Tripode+Flexible" },
//   { id: 70, name: "Mochila para Laptop", price: 50, description: "Protege tu laptop y lleva tus accesorios con comodidad.", image: "https://via.placeholder.com/150?text=Mochila+Laptop" },
//   { id: 71, name: "Cartera de Cuero", price: 45, description: "Elegante y duradera para tu día a día.", image: "https://via.placeholder.com/150?text=Cartera+Cuero" },
//   { id: 72, name: "Cinturón Reversible", price: 30, description: "Dos estilos en uno para combinar con tu ropa.", image: "https://via.placeholder.com/150?text=Cinturon" },
//   { id: 73, name: "Gafas de Sol Polarizadas", price: 55, description: "Protección UV y estilo para tus ojos.", image: "https://via.placeholder.com/150?text=Gafas+Sol" },
//   { id: 74, name: "Reloj de Pulsera Clásico", price: 80, description: "Accesorio elegante para cualquier ocasión.", image: "https://via.placeholder.com/150?text=Reloj" },
//   { id: 75, name: "Billetera con RFID", price: 25, description: "Protege tus tarjetas de crédito de robos digitales.", image: "https://via.placeholder.com/150?text=Billetera+RFID" },
//   { id: 76, name: "Set de Bricolaje para Niños", price: 40, description: "Desarrolla la creatividad y habilidades motoras.", image: "https://via.placeholder.com/150?text=Bricolaje+Ninos" },
//   { id: 77, name: "Rompecabezas 1000 Piezas", price: 30, description: "Desafío divertido para toda la familia.", image: "https://via.placeholder.com/150?text=Rompecabezas" },
//   { id: 78, name: "Juego de Mesa Estratégico", price: 50, description: "Horas de diversión con amigos y familiares.", image: "https://via.placeholder.com/150?text=Juego+Mesa" },
//   { id: 79, name: "Balón de Fútbol de Cuero", price: 35, description: "Duradero y resistente para partidos intensos.", image: "https://via.placeholder.com/150?text=Balon+Futbol" },
//   { id: 80, name: "Colchoneta de Yoga", price: 20, description: "Agarre antideslizante para tu práctica de yoga.", image: "https://via.placeholder.com/150?text=Colchoneta+Yoga" },
//   { id: 81, name: "Pesas Ajustables (par)", price: 80, description: "Entrena en casa con pesas que se adaptan a ti.", image: "https://via.placeholder.com/150?text=Pesas+Ajustables" },
//   { id: 82, name: "Cuerda de Saltar Inteligente", price: 30, description: "Mide tus saltos y calorías quemadas.", image: "https://via.placeholder.com/150?text=Cuerda+Inteligente" },
//   { id: 83, name: "Banda de Resistencia (set)", price: 25, description: "Fortalece tu cuerpo con una variedad de resistencias.", image: "https://via.placeholder.com/150?text=Bandas+Resistencia" },
//   { id: 84, name: "Guantes de Gimnasio", price: 15, description: "Protege tus manos durante tus entrenamientos.", image: "https://via.placeholder.com/150?text=Guantes+Gimnasio" },
//   { id: 85, name: "Botella de Agua de Acero Inoxidable", price: 18, description: "Mantiene tus bebidas frías o calientes por horas.", image: "https://via.placeholder.com/150?text=Botella+Acero" },
//   { id: 86, name: "Kit de Jardinería", price: 40, description: "Todo lo que necesitas para empezar tu propio jardín.", image: "https://via.placeholder.com/150?text=Kit+Jardineria" },
//   { id: 87, name: "Set de Tazas de Café", price: 25, description: "Diseño elegante para tus momentos de café.", image: "https://via.placeholder.com/150?text=Set+Tazas" },
//   { id: 88, name: "Vela Aromática de Lavanda", price: 15, description: "Crea un ambiente relajante en tu hogar.", image: "https://via.placeholder.com/150?text=Vela+Lavanda" },
//   { id: 89, name: "Difusor de Aceites Esenciales", price: 30, description: "Humidifica y aromatiza tu espacio.", image: "https://via.placeholder.com/150?text=Difusor" },
//   { id: 90, name: "Libro de Cocina Mediterránea", price: 22, description: "Recetas saludables y deliciosas de la dieta mediterránea.", image: "https://via.placeholder.com/150?text=Libro+Cocina" },
//   { id: 91, name: "Teatro en Casa", price: 500, description: "Sistema de sonido envolvente para una experiencia cinematográfica.", image: "https://via.placeholder.com/150?text=Teatro+Casa" },
//   { id: 92, name: "Barra de Sonido", price: 180, description: "Mejora el audio de tu televisor de forma sencilla.", image: "https://via.placeholder.com/150?text=Barra+Sonido" },
//   { id: 93, name: "Control Remoto Universal", price: 30, description: "Controla todos tus dispositivos con un solo mando.", image: "https://via.placeholder.com/150?text=Control+Universal" },
//   { id: 94, name: "Televisor OLED 55 pulgadas", price: 1200, description: "Colores vibrantes y negros perfectos para ver películas.", image: "https://via.placeholder.com/150?text=TV+OLED" },
//   { id: 95, name: "Soporte de Pared para TV", price: 45, description: "Ahorra espacio y ajusta el ángulo de tu televisor.", image: "https://via.placeholder.com/150?text=Soporte+TV" },
//   { id: 96, name: "Auriculares para Gaming", price: 100, description: "Micrófono con cancelación de ruido para una comunicación clara.", image: "https://via.placeholder.com/150?text=Auriculares+Gaming" },
//   { id: 97, name: "Teclado TKL Compacto", price: 80, description: "Diseño sin teclado numérico para más espacio en tu escritorio.", image: "https://via.placeholder.com/150?text=Teclado+TKL" },
//   { id: 98, name: "Monitor Ultrawide", price: 350, description: "Amplio espacio de trabajo y juego con una sola pantalla.", image: "https://via.placeholder.com/150?text=Monitor+Ultrawide" },
//   { id: 99, name: "Soporte para Monitor", price: 50, description: "Ajusta la altura y el ángulo de tu pantalla fácilmente.", image: "https://via.placeholder.com/150?text=Soporte+Monitor" },
//   { id: 100,
//     name: "Ratón vertical",
//     price: 70,
//     description: "Diseño ergonómico para una postura natural de la mano.",
//     image: "https://via.placeholder.com/150?text=Raton+Vertical"
//   }
// ];
