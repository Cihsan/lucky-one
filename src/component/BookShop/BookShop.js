import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import OrderBook from '../OrderBook/OrderBook';

const BookShop = () => {
    //add cart
    const [cart,setCart]=useState([])
    //console.log(cart);
    const addCart=(book)=>{
        const objToArr=[...cart,book]
        setCart(objToArr);
    }
    
    //Data Load
    const [books,setBook]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])

    // sugest
    const sugest=(cart)=>{
        const it=cart.map(items=>console.log(Math.random(items.name)))
        //console.log(cart);
        //const rand= Math.random(cart)
//alert(rand);
    }

    //reset
    const reset=(cart)=>{
        cart=[] 
        console.log(cart);
        return
    }
    return (
        <div style={{display:'grid', gridTemplateColumns:'3fr 1fr'}}>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto'}}>
            {
                books.map(book=><Book key={book.id} book={book} addCart={addCart}></Book>)
            }
            </div>
            <div style={{display:'grid', gridTemplateColumns:'auto'}}>
            <h1>Cart Item</h1>
            {
                cart.map(item=><OrderBook key={item.id} item={item}></OrderBook>)
            }
             <div>
                <button onClick={()=>sugest(cart)}>Sugest</button>
                <button onClick={()=>reset(cart)}>Reset</button>
            </div>
            </div>
        </div>
    );
};

export default BookShop;
