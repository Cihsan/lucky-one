import React from 'react';
import './Book.css'


const Book = ({book,addCart}) => {
    const {name,price,img}=book
    return (
        <div className='booksItem' >
            <img src={img} alt="" width={'50%'}/>
            <h3>{name}</h3>
            <p>${price}</p>
            <div className='flex'>
            <button className='btn' onClick={()=>addCart(book)}>Buy Now  </button>
            <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/db29d11448c947c42822aca42026a9f14806530d/optimized/solid/shopping-cart.svg" alt="" width={'10%'}/>
            </div>
        </div>
    );
};
export default Book;
