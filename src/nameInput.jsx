import React, {useState} from "react";

function NameInput({name, setName}) {
    const isNameValid = name.trim().length >= 3;
    return (
        <div>
            <label htmlFor="name">İsim</label>
            <input id="name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required/>
            {!isNameValid && (<p>En az 3 karakter girin.</p>)}
        </div>  
);    
}

export default NameInput;
