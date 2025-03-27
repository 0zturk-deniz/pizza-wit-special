import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Checkout({choices = [], pizzaPrice=85.50, isFormValid, formData}) {
    const extraPrice = choices.length*5;
    const totalPrice = extraPrice + pizzaPrice;

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {...formData, extras: choices};
    console.log(payload);

    axios
    .post("https://reqres.in/api/pizza", payload)
    .then((response) => {console.log(response.data);
        navigate("/success");
    })
    .catch((error) => console.log(error))
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
            <button type="button" onClick={handleSubmit} disabled={!isFormValid}>SİPARİŞ VER</button>
        </div>
    );
}

export default Checkout;