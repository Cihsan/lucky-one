import React, { useEffect, useState } from 'react';

const BookShop = () => {
    const [books,setBook]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div>
            {
                books.map(book=><h5>{book.name}</h5>)
            }
        </div>
    );
};

export default BookShop;