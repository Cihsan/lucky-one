import React from 'react';

const OrderBook = ({item}) => {
    const{name,img}=item
    return (
        <div>
            <div style={{display:'flex'}}>
            <img src={img} alt="" width={'10%'}/>
            <p style={{margin:'10px'}}>{name}</p>
            </div>
           
        </div>
    );
};

export default OrderBook;