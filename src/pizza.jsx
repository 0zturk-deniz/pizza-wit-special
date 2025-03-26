import React, {useState} from "react";

function Pizza({list}) {
    return (
        <div>
            {list.map((pizza,index) => (
                <div key={index}>
                    <h1 className="pizza-name">{pizza.name}</h1>
                    <h2 className="price">{pizza.price.toFixed(2)}₺</h2>
                    <p className="rating">{pizza.rating}</p>
                    <p className="order-number">({pizza.orders})</p>
                    <p>{pizza.text}</p>
                </div>   
            ))}
        </div>
    );   
}

export default Pizza;