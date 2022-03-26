import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const BookShop = () => {
    const [books,setBook]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div style={{display:'grid', gridTemplateColumns:'3fr 1fr'}}>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto'}}>
            {
                books.map(book=><Book key={book.id} book={book}></Book>)
            }
            </div>
            <div style={{display:'grid', gridTemplateColumns:'auto'}}>
            <h1>SideBar</h1>
            </div>
        </div>

        
        
    );
};

export default BookShop;