const products = [
    {
        "id": 1,
        "title": "Procesador Intel i3 7100",
        "sale": true,
        "price": 100,
        "description": "Procesador Intel i3 de 7ma generación con 2 núcleos y 4 hilos para performance de ofimática",
        "category": "hardware",
        "type": "procesador",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/10/353950567/WW/SK/DZ/81680765/intel-core-i3-7100-processor-500x500.jpeg"
    },
    {
        "id": 2,
        "title": "Procesador Intel i3 7300",
        "price": 105,
        "description": "Procesador Intel i3 de 7ma generación con 2 núcleos y 4 hilos para performance de ofimática",
        "category": "hardware",
        "type": "procesador",
        "image": "https://usmall.ru/image/538/81/19/70fd0663f68e1b2061dc61d61f2fb89b.jpeg"
    },
    {
        "id": 3,
        "title": "Procesador Intel i3 8100",
        "sale": true,
        "price": 110,
        "description": "Procesador Intel i3 de 8va generación para performance gaming gama entrada",
        "category": "hardware",
        "type": "procesador",
        "image": "https://www.heavenimagenes.com/heavencommerce/73789f5f-970d-4319-82d0-77eea979d9b7/images/v2/INTEL/1809111441135444_01_medium.jpg"
    },
    {
        "id": 4,
        "title": "Logitech G502 Hero",
        "price": 80,
        "description": "Mouse gaming de gama alta con 12 botones",
        "category": "periferico",
        "type": "mouse",
        "image": "https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-5510244.jpg"
    },
    {
        "id": 5,
        "title": "Logitech G935 Wireless Headset",
        "sale": true,
        "price": 90,
        "description": "Headset de gama alta con sonido envolvente DTS Headphone X 2.0",
        "category": "periferico",
        "type": "auricular",
        "image": "https://matictecno.com.ar/wp-content/uploads/2022/01/logitech-g935-wireless-7-1-surround-981-000742.png"
    },
    {
        "id": 6,
        "title": "Redragon Kumara",
        "sale": true,
        "price": 32,
        "description": "Teclado mecánico con switches outemu blue",
        "category": "periferico",
        "type": "teclado",
        "image": "https://wallnet.com.ar/wp-content/uploads/2023/09/Teclados-Redragon-Kumara-Black-blue-switch-spanish0-600x600.jpg"
    },
    {
        "id": 7,
        "title": "Procesador AMD Ryzen 5 5600X",
        "sale": false,
        "price": 299,
        "description": "Procesador AMD Ryzen 5 de 6 núcleos y 12 hilos para alto rendimiento en juegos y aplicaciones",
        "category": "hardware",
        "type": "procesador",
        "image": "https://elit-prod.s3.amazonaws.com/p/10314/i/QEm1T_l.webp"
    },
    {
        "id": 8,
        "title": "Tarjeta gráfica AMD Radeon RX 6700 XT",
        "sale": true,
        "price": 499,
        "description": "Tarjeta gráfica AMD Radeon RX 6700 XT para gaming de alta calidad y rendimiento",
        "category": "hardware",
        "type": "gpu",
        "image": "https://www.precio-calidad.com.ar/wp-content/uploads/2021/09/TUF-RX6700XT-O12G-GAMING-1.jpg"
    },
    {
        "id": 9,
        "title": "Procesador AMD Ryzen 7 5800X",
        "sale": false,
        "price": 449,
        "description": "Procesador AMD Ryzen 7 de 8 núcleos y 16 hilos para multitarea intensiva y rendimiento gaming avanzado",
        "category": "hardware",
        "type": "procesador",
        "image": "https://www.xt-pc.com.ar/img/productos/1/CPU570.jpg"
    },
    {
        "id": 10,
        "title": "Procesador AMD Ryzen 9 5900X",
        "sale": true,
        "price": 599,
        "description": "Procesador AMD Ryzen 9 de 12 núcleos y 24 hilos para potencia de procesamiento extremo",
        "category": "hardware",
        "type": "procesador",
        "image": "https://http2.mlstatic.com/D_NQ_NP_657275-MLA31853066320_082019-O.webp"
    },
    {
        "id": 11,
        "title": "Tarjeta gráfica AMD Radeon RX 6800",
        "sale": false,
        "price": 649,
        "description": "Tarjeta gráfica AMD Radeon RX 6800 para gaming de alta gama y renderización de gráficos",
        "category": "hardware",
        "type": "tarjeta gráfica",
        "image": "https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-AMD-RX-6800-XT-POWERCOLOR-RED-DRAGON.webp"
    },
    {
        "id": 12,
        "title": "Auriculares Bluetooth con cancelación de ruido",
        "sale": true,
        "price": 129,
        "description": "Auriculares Bluetooth con tecnología de cancelación de ruido para una experiencia auditiva inmersiva",
        "category": "accesorios",
        "type": "auriculares",
        "image": "https://http2.mlstatic.com/D_NQ_NP_818342-MLU72608036825_112023-O.webp"
    },
    {
        "id": 13,
        "title": "Base refrigerante para portátil",
        "sale": false,
        "price": 35,
        "description": "Base refrigerante con ventiladores para mantener el portátil fresco durante largas sesiones de trabajo o juego",
        "category": "accesorios",
        "type": "refrigeración",
        "image": "https://http2.mlstatic.com/D_NQ_NP_948097-MLA50560742180_072022-O.webp"
    },
    {
        "id": 14,
        "title": "Mochila para portátil resistente al agua",
        "sale": true,
        "price": 55,
        "description": "Mochila para portátil con compartimentos acolchados y resistencia al agua para proteger tus dispositivos",
        "category": "accesorios",
        "type": "mochila",
        "image": "https://topesdegama.com/app/uploads-topesdegama.com/2022/07/Mochila-portatiles-Lenovo-Casual-B210.png?x=480&quality=40"
    }
]

export { products };