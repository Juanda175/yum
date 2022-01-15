export const productos = [
    {
        id: '1',
        name: 'Nuez c/chocolate',
        precio: 500,
        cant: 100,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,w_250/v1641385025/imagenes%20yum/01_7_iiooav.jpg',
           },
    {
        id: '2',
        name: 'Pasas de uva c/chocolate',
        precio: 400,
        cant: 100,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_2_rthbpl.jpg',
      },
    {
        id: '3',
        name: 'Garrapiñadas de mani c/chocolate',
        precio: 450,
        cant: 500,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_3_ocbzjg.jpg',
           },
    {
        id: '4',
        name: 'Cubanitos Helados',
        precio: 150,
        cant: 1,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_6_rlymoz.jpg',
        
    },
    {
        id: '5',
        name: 'Garrapiñadas de Nuez',
        precio: 400,
        cant: 100,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_1_hzrn94.jpg',
        
    },
    {
        id: '6',
        name: 'Garrapiñadas de Mani',
        precio: 350,
        cant: 500,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_5_o9c9gg.jpg',
        
    },
    {
        id: '7',
        name: 'Garrapiñadas de Almendras',
        precio: 400,
        cant: 100,
        stock: 50,
        img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_4_asxn2x.jpg',
        
    },
];

export const prod = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});