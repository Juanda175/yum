export const productos = [
   
    {id:31, tipo: "Espumante Blanco", name: "Baron B Extra Brut", detalle: "Chandon - 2002", precio: 3900, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v1_lnpmo9.png'},
    {id:32, tipo: "Espumante Blanco", name: "Rosell Boher Brut", detalle: "Cavas Rosell Boher - 2010", precio: 1300, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v2_nsavgn.png'},
    {id:33, tipo: "Espumante Blanco", name: "Trampeter Extra Brut", detalle: "Rutini Wines - 2013", precio: 1665, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v3_lxayjv.png'},
    {id:34, tipo: "Espumante Blanco", name: "Saint Felicien Nature", detalle: "Catena Zapata - 1996", precio: 4955, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v4_r2xtsm.png'},
    {id:35, tipo: "Espumante Blanco", name: "Bressia Royale Brut Nature", detalle: "Bressia - 2015", precio: 1530, img: 'https://res.chttps://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v7_zxyvrv.pngloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v5_yel2lh.png'},
    {id:36, tipo: "Blanco", name: "Apartado Gran Chardonay", detalle: "Rutinis Wine - 2015 ", precio: 1530, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v6_fbdz8t.png'},
    {id:37, tipo: "Blanco", name: "Adrianna Vineyard White Bones", detalle: "Catenas Zapata - 2012", precio: 2630, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v7_zxyvrv.png'},
    {id:38, tipo: "Blanco", name: "Luca Chardonay ", detalle: "Laura Catena - 2013", precio: 3530, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v8_cwvj5a.png'},
    {id:39, tipo: "Blanco", name: "Premius", detalle: "Salentein - 2014", precio: 1610, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v9_i7gafw.png'},
    {id:310, tipo: "Tinto", name: "Alta Vista Terreoir", detalle: "Alta Vista - 2012", precio: 1590, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v10_kxe2nu.png'},
    {id:311, tipo: "Tinto", name: "Alto a las Hormigas", detalle: "Alto a las Hormigas - 2015", precio: 890, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v11_st3x3t.png'},
    {id:312, tipo: "Tinto", name: "Fabre Montmayou", detalle: "Domaine Vistalba - 2006", precio: 5520, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v12_qczikk.png'}
];



export const prod = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});




//probando
// {
//     id: '1',
//     name: 'Nuez c/chocolate',
//     precio: 500,
//     cant: 100,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,w_250/v1641385025/imagenes%20yum/01_7_iiooav.jpg',
//        },
// {
//     id: '2',
//     name: 'Pasas de uva c/chocolate',
//     precio: 400,
//     cant: 100,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_2_rthbpl.jpg',
//   },
// {
//     id: '3',
//     name: 'Garrapiñadas de mani c/chocolate',
//     precio: 450,
//     cant: 500,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_3_ocbzjg.jpg',
//        },
// {
//     id: '4',
//     name: 'Cubanitos Helados',
//     precio: 150,
//     cant: 1,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_6_rlymoz.jpg',
    
// },
// {
//     id: '5',
//     name: 'Garrapiñadas de Nuez',
//     precio: 400,
//     cant: 100,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_1_hzrn94.jpg',
    
// },
// {
//     id: '6',
//     name: 'Garrapiñadas de Mani',
//     precio: 350,
//     cant: 500,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_5_o9c9gg.jpg',
    
// },
// {
//     id: '7',
//     name: 'Garrapiñadas de Almendras',
//     precio: 400,
//     cant: 100,
//     stock: 50,
//     img: 'https://res.cloudinary.com/dm3reycl8/image/upload/c_scale,h_250,w_250/v1641385025/imagenes%20yum/01_4_asxn2x.jpg',
    
// },