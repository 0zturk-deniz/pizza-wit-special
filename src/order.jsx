import React,  {useState} from "react";
import "./order.css";
import Ingredients from "./ingredients";
import Counter from "./counter";
import Checkout from "./checkout";

function Order() {
    return (
        <form className="form">
        <h1 className="pizza-name">Position Absolute Acı Pizza</h1>
        <h2 className="price">85.50₺</h2>
        <p className="rating">4.9</p>
        <p className="order-number">(200)</p>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
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
        <Counter />
        <Checkout/>
        </form>
        

    )
}

export default Order;


