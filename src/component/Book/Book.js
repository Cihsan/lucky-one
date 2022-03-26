import React from 'react';

const Book = ({book}) => {
    const {name,price,img}=book
    return (
        <div style={{border:'1px solid grey'}}>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h4>${price}</h4>
        </div>
    );
};

export default Book;