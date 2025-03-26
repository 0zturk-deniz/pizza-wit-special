import React,  {useState} from "react";
import "./order.css";
import Ingredients from "./ingredients";
import Counter from "./counter";
import Checkout from "./checkout";
import Pizza from "./pizza";

const pizzaList=[
    {name: "Position Absolute Acı Pizza",
    price: 85.50,
    rating: 4.9,
    orders: 200,
    text: "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
    }
];

function Order() {
    return (
        <form className="form">
        <Pizza list={pizzaList}/>
        <label htmlFor="name">İsim</label>
        <input id="name" name="name" type="text"></input>
        <div className="size">
        <p>Boyut Seç*</p>
        <label>
            <input type="radio" name="size" value="small" />
            Küçük
        </label>
        <label>
            <input type="radio" name="size" value="medium" />
            Orta
        </label>
        <label>
            <input type="radio" name="size" value="large" />
            Büyük
        </label>

        </div>
        <div className="dough">
            <label htmlFor="dough">Hamur Seç*</label>
                <select id="dough" name="dough">
                    <option value="">Hamur Kalınlığı</option>
                    <option value="thick">Kalın Hamur</option>
                    <option value="thin">İnce Hamur</option>
                </select>
            
        </div>
        <Ingredients />
        <label htmlFor="note">Sipariş Notu</label>
        <input id="note" name="note" type="text"></input>
        <Counter choices={Ingredients}/>
        <Checkout/>
        </form>
        

    )
}

export default Order;


