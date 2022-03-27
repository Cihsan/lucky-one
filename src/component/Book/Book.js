import React from 'react';

const Book = ({book,addCart}) => {
    const {name,price,img}=book
    return (
        <div style={{border:'1px solid grey', padding:'10px', margin:'10px',width:'300px'}}>
            <img src={img} alt="" width={'50%'}/>
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={()=>addCart(book)}>Cart</button>
        </div>
    );
};

export default Book;