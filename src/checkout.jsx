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
                <span>{extraPrice.toFixed(2)}₺</span>
            </div>
            <div>
                <span>Toplam</span>
                <span>{totalPrice.toFixed(2)}₺</span>
            </div>
            <button type="button" onClick="handleSubmit" disabled={extraPrice === 0}>SİPARİŞ VER</button>
        </div>
    );
}

export default Checkout;