import React from 'react'
import './Product.css'

export default function Product() {
    // fecth data : 
    let products=[
        {
            id:1,
            name:"Product 1",
            price:500,
            description:"",
            stock:5,
            img:"public/iphone8plus.jpg"
        },
        {
            id:2,
            name:"Product 2",
            price:500,
            description:"",
            stock:5,
            img:"public/iphone8plus.jpg"
        },
        {
            id:3,
            name:"Product 3",
            price:500,
            description:"",
            stock:5,
            img:"public/iphone8plus.jpg"
        },
        {
            id:4,
            name:"Product 4",
            price:500,
            description:"",
            stock:5,
            img:"public/iphone8plus.jpg"
        }
    ]
    const handleClick=(id:number)=>{
        console.log(id)
    }
     return (
    <div className='container'>Product
        {/* 
            lấy dữ liệu render
        */}
        {products.map((product) => {
                return (
                    <div key={product.id} >
                        <p>ID: {product.id}</p>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p>Stock: {product.stock}</p>
                        <img src={product.img} alt={product.name} />
                        <button onClick={()=>handleClick(product.id)}>mua</button>
                    </div>
                );
            })}
    </div>
  )
}
