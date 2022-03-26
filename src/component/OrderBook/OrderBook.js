import React from 'react';

const OrderBook = ({item}) => {
    const{name,img}=item
    return (
        <div>
            <div style={{display:'flex'}}>
            <img src={img} alt="" width={'25%'}/>
            <p>{name}</p>
            </div>
           
        </div>
    );
};

export default OrderBook;