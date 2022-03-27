import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import OrderBook from '../OrderBook/OrderBook';
import './BookShop.css'
const BookShop = () => {
    //Data Load
    const [books,setBook]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])

    //add cart
    const [cart,setCart]=useState([])
    //console.log(cart);
    const addCart=(book)=>{
        const objToArr=[...cart,book]
        setCart(objToArr);
    }
    // Recommended
    const recommend=(cart)=>{
        let radcart=cart[Math.floor(Math.random()*cart.length)]
        alert(`You Can Order:-  ${radcart.name}`);
    }

    //Reset
    const reset=(cart)=>{
        let empty=[]
        setCart(empty)
    }
    return (
        <div className='bookshop' >
            <div className='book' >
            {
                books.map(book=><Book key={book.id} book={book} addCart={addCart}></Book>)
            }
            </div>
            <div className='fullcart' >
                
            <div className='items'>
            <h2>Cart</h2>
                {
                cart.map(item=><OrderBook key={item.id} item={item}></OrderBook>)
            }
                <div className='twoBtn'>
                    <button className='cartbtn' onClick={()=>recommend(cart)}>Recommend</button>
                    <button className='cartbtn' onClick={()=>reset(cart)}>Reset</button>
                </div>
            </div>
            </div>
            <article>
                <h1>How React Works</h1>
                <p>React generate <strong>Dynamic HTML</strong> for user interface easy to write code for developer,
                React generate React Dom which is called <strong>Virtual DOM</strong> for web browser and React native for mobile tabloid other devices,
                react brought JSX means JavaScript XML which is to convert vanilla javascript, here Babel is working transpiler as converter  

                </p>
                <h1>Props vs State</h1>
                <p><strong>Props</strong> is declared in child component it receives passing data as object from parent component, Props is Immutable (is not modified).Props is read-only data.
                    </p>
                <p><strong>State</strong> Dosen't go parent component to child component, State is mutable (can be modified, State is not only read also can write
                </p>
            </article>
        </div>
    );
};

export default BookShop;
