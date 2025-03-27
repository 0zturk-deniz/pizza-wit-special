import React,  {useState} from "react";
import "./order.css";
import Ingredients from "./ingredients";
import Counter from "./counter";
import Checkout from "./checkout";
import Pizza from "./pizza";
import NameInput from "./nameInput";
import PizzaSize from "./pizzaSize";
import Dough from "./dough";
import Note from "./note";

const pizzaList=[
    {name: "Position Absolute Acı Pizza",
    price: 85.50,
    rating: 4.9,
    orders: 200,
    text: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
    }
];
 
function Order() {
    const [choices, setChoices] = useState([]);
    const [name, setName] = useState("");

    const [size, setSize] = useState("");
    const [dough, setDough] = useState("");
    const [note, setNote] = useState("");

    console.log("name", name);
console.log("size", size);
console.log("dough", dough);
console.log("choices", choices);

    const isFormValid = name.trim().length >= 3 && size !== "" && dough !== "" && choices.length >= 4;

    return (
        <form className="form">
        <Pizza list={pizzaList}/>
        <NameInput name={name} setName={setName}/>
        <PizzaSize size={size} setSize={setSize}/>
        <Dough dough={dough} setDough={setDough}/>
        <Ingredients choices={choices} setChoices={setChoices}/>
        <Note note={note} setNote={setNote}/>
        <Counter />
        <Checkout choices={choices} isFormValid = {isFormValid} formData={{name, size, dough, note}}/>
        </form>
    );
    console.log({name, size, dough, choices, isFormValid});
}

  
export default Order;


