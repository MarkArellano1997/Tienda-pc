const productos = [
    {
        id: 1,
        nombre: "Laptop Gamer",
        descripcion: "Ryzen 7 - RTX 4060",
        precio: 1200,
        categoria: "Laptop",
        imagen: "/images/laptop.png",
        stock: 5,
        oferta: true,
        caracteristicas: [
        "Ryzen 7",
        "RTX 4060",
        "16GB RAM",
        "SSD 1TB"
        ]
    },
    {
        id: 2,
        nombre: "Monitor ASUS",
        descripcion: "27 pulgadas - 144Hz",
        precio: 350,
        categoria: "Monitor",
        imagen: "/images/monitor.jpg",
        stock: 2,
        oferta: false,
        caracteristicas: [
        "27 pulgadas",
        "144Hz",
        "IPS",
        "Full HD"
        ]
    },
    {
        id: 3,
        nombre: "Laptop Lenovo IdeaPad",
        descripcion: "Ryzen 5 - 8GB RAM - SSD 512GB",
        precio: 950,
        categoria: "Laptop",
        imagen: "/images/laptop.png",
        stock: 8,
        oferta: false,
        caracteristicas: [
            "Ryzen 5",
            "8GB RAM",
            "SSD 512GB",
            "Pantalla Full HD"
        ]
    },
    {
        id: 4,
        nombre: "Laptop HP Victus",
        descripcion: "Intel i7 - RTX 4050",
        precio: 1350,
        categoria: "Laptop",
        imagen: "/images/laptop.png",
        stock: 3,
        oferta: true,
        caracteristicas: [
            "Intel Core i7",
            "RTX 4050",
            "16GB RAM",
            "SSD 1TB"
        ]
    },
    {
        id: 5,
        nombre: "Monitor Samsung",
        descripcion: "24 pulgadas - 100Hz",
        precio: 280,
        categoria: "Monitor",
        imagen: "/images/monitor.jpg",
        stock: 10,
        oferta: false,
        caracteristicas: [
            "24 pulgadas",
            "100Hz",
            "Panel IPS",
            "Full HD"
        ]
    },
    {
        id: 6,
        nombre: "Monitor LG UltraGear",
        descripcion: "27 pulgadas - 165Hz",
        precio: 420,
        categoria: "Monitor",
        imagen: "/images/monitor.jpg",
        stock: 4,
        oferta: true,
        caracteristicas: [
            "27 pulgadas",
            "165Hz",
            "1ms",
            "Full HD"
        ]
    },
    {
        id: 7,
        nombre: "Teclado Redragon Kumara",
        descripcion: "Mecánico RGB",
        precio: 65,
        categoria: "Teclado",
        imagen: "/images/monitor.jpg",
        stock: 15,
        oferta: false,
        caracteristicas: [
            "Switch Blue",
            "RGB",
            "Anti-Ghosting",
            "USB"
        ]
    },
    {
        id: 8,
        nombre: "Mouse Logitech G203",
        descripcion: "Gaming RGB 8000 DPI",
        precio: 35,
        categoria: "Mouse",
        imagen: "/images/monitor.jpg",
        stock: 20,
        oferta: false,
        caracteristicas: [
            "8000 DPI",
            "RGB",
            "6 Botones",
            "USB"
        ]
    }
];

export default productos;