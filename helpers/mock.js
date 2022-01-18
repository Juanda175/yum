const prodet = [
    {id:1, categoria: "pizza", tipo: "Pizza", nombre: "Mozzarella", detalle: "Mozzarella, aceitunas, ajo picado", precio: 900, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536721/vineria%20react/pmoza_lkovik.png'},
    {id:2, categoria: "pizza", tipo: "Pizza", nombre: "Margarita", detalle: "Mozzarella de leche de vaca, tomate, aceitunas", precio: 1100, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/pmargarita_a5fyh2.png'},
    {id:3, categoria: "pizza", tipo: "Pizza", nombre: "4-Quesos", detalle: "La mozzarella, la gorgonzola, el parmesano y la ricotta", precio: 900, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536721/vineria%20react/4quesos_o23i9x.png'},
    {id:4, categoria: "pizza", tipo: "Pizza", nombre: "Calzone", detalle: "Jamon dulce, salame y huevo", precio: 600, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536721/vineria%20react/pmoza_lkovik.png'},
    {id:5, categoria: "empanada", tipo: "Empanada", nombre: "Empanada Carne", detalle: "carne picada, cebolla, aceitunas, huevo", precio: 750, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536723/vineria%20react/ecarne_ewjgxv.png'},
    {id:6, categoria: "empanada", tipo: "Empanada", nombre: "Jamon y Queso", detalle: "Jamon y Queso cortados en cubos ", precio: 750, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536717/vineria%20react/ejyq_q5zqmg.png'},
    {id:7, categoria: "empanada", tipo: "Empanada", nombre: "Humita", detalle: "Choclo y salsa blanca", precio: 800, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536720/vineria%20react/echoclo_apvdzn.png'},
    {id:8, categoria: "empanada", tipo: "Empanada", nombre: "Pollo", detalle: "Pollo cortado en cubos, morron, cebolla, queso mozzarella", precio: 850, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536721/vineria%20react/epollo_mqs7k2.png'},
    {id:9, categoria: "minuta", tipo: "sand", nombre: "Tostados", detalle: "Pan de miga jamon y queso", precio: 700, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536722/vineria%20react/stostado_hkzmmh.png'},
    {id:10, categoria: "minuta", tipo: "Hamburguesa", nombre: "Hambur. completa", detalle: "Lechuga, tomate, huevo, queso en feta", precio: 650, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536717/vineria%20react/hcompleta_ozee7i.png'},
    {id:11, categoria: "minuta", tipo: "Minuta", nombre: "Papas Fritas", detalle: "Papas baston fritas", precio: 450, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/minutas_aogk4g.png'},
    {id:12, categoria: "minuta", tipo: "Ensalada", nombre: "Ensalada Cesar", detalle: "pollo cortado en tiras, lechuga , tomate", precio: 600, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536719/vineria%20react/ecesas_kmlapz.png'},
    {id:21, categoria: "gaseosa", tipo: "gaseosa", nombre: "Coca-Cola", detalle: "Gaseosa Coca-Cola 500cc", precio: 150, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536716/vineria%20react/cc1_ijayns.png'},
    {id:22, categoria: "gaseosa", tipo: "gaseosa", nombre: "Sprite", detalle: "Gaseosa Lima-Limon 500cc", precio: 150, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536717/vineria%20react/cc2_ddey5j.png'},
    {id:23, categoria: "gaseosa", tipo: "gaseosa", nombre: "Paso de los toros", detalle: "Gaseosa Pomelo 500cc", precio: 150, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536717/vineria%20react/cc3_mefuop.png'},
    {id:24, categoria: "gaseosa", tipo: "gaseosa", nombre: "Fanta", detalle: "Gaseosas Naranja 500cc", precio: 600, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/cc4_qejohy.png'},
    {id:25, categoria: "cervezas", tipo: "cervezas", nombre: "Corona", detalle: "Cerveza Corona 350cc", precio: 350, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536720/vineria%20react/cc5_txo6uc.png'},
    {id:26, categoria: "cervezas", tipo: "cervezas", nombre: "Heineken", detalle: "Cerveza Heineken 700cc ", precio: 350, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/cc6_lj3pr0.png'},
    {id:27, categoria: "cervezas", tipo: "cervezas", nombre: "Brahma", detalle: "Cerveza Brahma 700cc", precio: 300, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/cc7_mtfjee.png'},
    {id:28, categoria: "cervezas", tipo: "cervezas", nombre: "Stella Artois", detalle: "Cerveza Stella Artois 700cc", precio: 350, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536720/vineria%20react/cc8_dbeec9.png'},
    {id:29, categoria: "agua", tipo: "agua", nombre: "Cristal", detalle: "Agua mineral Cristal 500cc", precio: 250, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/cc9_sfsrok.png'},
    {id:210, categoria: "agua", tipo: "agua", nombre: "Cielo", detalle: "Agua mineral Cielo 500cc", precio: 300, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536717/vineria%20react/cc10_riwyou.png'},
    {id:211, categoria: "agua", tipo: "agua-saborizada", nombre: "Levite Manzana", detalle: "Agua saborizada sabor manzana 500cc", precio: 450, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536718/vineria%20react/cc11_w9wlbf.png'},
    {id:212, categoria: "agua", tipo: "agua-saborizada", nombre: "Levite Cero", detalle: "Agua Saborizada naranja 500cc", precio: 450, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642536717/vineria%20react/cc12_padrjd.png'},
    {id:31, categoria: "vino", tipo: "Espumante Blanco", name: "Baron B Extra Brut", detalle: "Chandon - 2002", precio: 3900, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v1_lnpmo9.png'},
    {id:32, categoria: "vino", tipo: "Espumante Blanco", name: "Rosell Boher Brut", detalle: "Cavas Rosell Boher - 2010", precio: 1300, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v2_nsavgn.png'},
    {id:33, categoria: "vino", tipo: "Espumante Blanco", name: "Trampeter Extra Brut", detalle: "Rutini Wines - 2013", precio: 1665, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v3_lxayjv.png'},
    {id:34, categoria: "vino", tipo: "Espumante Blanco", name: "Saint Felicien Nature", detalle: "Catena Zapata - 1996", precio: 4955, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v4_r2xtsm.png'},
    {id:35, categoria: "vino", tipo: "Espumante Blanco", name: "Bressia Royale Brut Nature", detalle: "Bressia - 2015", precio: 1530, img: 'https://res.chttps://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v7_zxyvrv.pngloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v5_yel2lh.png'},
    {id:36, categoria: "vino", tipo: "Blanco", name: "Apartado Gran Chardonay", detalle: "Rutinis Wine - 2015 ", precio: 1530, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502051/vineria%20react/v6_fbdz8t.png'},
    {id:37, categoria: "vino", tipo: "Blanco", name: "Adrianna Vineyard White Bones", detalle: "Catenas Zapata - 2012", precio: 2630, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v7_zxyvrv.png'},
    {id:38, categoria: "vino", tipo: "Blanco", name: "Luca Chardonay ", detalle: "Laura Catena - 2013", precio: 3530, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v8_cwvj5a.png'},
    {id:39, categoria: "vino", tipo: "Blanco", name: "Premius", detalle: "Salentein - 2014", precio: 1610, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v9_i7gafw.png'},
    {id:310, categoria: "vino", tipo: "Tinto", name: "Alta Vista Terreoir", detalle: "Alta Vista - 2012", precio: 1590, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v10_kxe2nu.png'},
    {id:311, categoria: "vino", tipo: "Tinto", name: "Alto a las Hormigas", detalle: "Alto a las Hormigas - 2015", precio: 890, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v11_st3x3t.png'},
    {id:312, categoria: "vino", tipo: "Tinto", name: "Fabre Montmayou", detalle: "Domaine Vistalba - 2006", precio: 5520, img: 'https://res.cloudinary.com/dm3reycl8/image/upload/v1642502052/vineria%20react/v12_qczikk.png'}
];

export const getFetch = new Promise((resolve, reject)=>{
    
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(prodet)
        }, 1000)
    }else{
        reject('error')
    }
})