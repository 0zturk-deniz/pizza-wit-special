import React, {useState} from "react";

function Checkout({choices = [], pizzaPrice=85.50}) {
    const extraPrice = choices.length*5;
    const totalPrice = extraPrice + pizzaPrice;

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Sipariş alındı!");
    }

    return (
        <div>
            <h3>Sipariş Toplamı</h3>
            <div>
                <span>Seçimler</span>
                <span>{extraPrice}</span>
            </div>
            <div>
                <span>Toplam</span>
                <span>{totalPrice}</span>
            </div>
            <button type="button" onClick="handleSubmit">SİPARİŞ VER</button>
        </div>
    );
}

export default Checkout;