import React from 'react';

const OrderBook = ({item}) => {
    const{name,img}=item
    return (
        <div>
            <div style={{display:'flex',justifyContent: 'center',margin:'10px'}}>
            <img src={img} alt="" width={'10%'} style={{border:'1px solid grey',borderRadius:'50%'}}/>
            <h5 style={{margin:'10px'}}>{name}</h5>
            </div>
        </div>
    );
};

export default OrderBook;