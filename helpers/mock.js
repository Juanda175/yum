const yumprod = [
    { id: '1', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '2', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '3', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '4', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '5', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '6', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '7', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'},
    { id: '8', foto:'https://res.cloudinary.com/dm3reycl8/image/upload/v1642194315/imagenes%20yum/yum_pfqugt.png'}
];


export const getFetch = new Promise((resolve, reject)=>{
    
    let condicion = true
    if(condicion){
        setTimeout(()=>{
            resolve(yumprod)
        }, 1000)
    }else{
        reject('error')
    }
})