import React from "react";

function PizzaSize({size, setSize}) {
    return (
        <div className="size">
        <p>Boyut Seç*</p>
        <label>
            <input type="radio" name="size" value="small" checked={size === "small"} onChange={(event) => setSize(event.target.value)}/>
            Küçük
        </label>
        <label>
            <input type="radio" name="size" value="medium" checked={size === "medium"} onChange={(event) => setSize(event.target.value)}/>
            Orta
        </label>
        <label>
            <input type="radio" name="size" value="large" checked={size === "large"} onChange={(event) => setSize(event.target.value)}/>
            Büyük
        </label>

        </div>

    )
}

export default PizzaSize;