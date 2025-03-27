import React, { useState } from "react";

const ingredientsList = [
  "Sucuk", "Zeytin", "Mantar", "Peynir", "Mozzarella",
  "Soğan", "Mısır", "Jalapeno", "Ananas", "Salam",
  "Tavuk", "Domates"
];

function Ingredients({choices = [], setChoices}) {

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked && choices.length >= 10) {
      alert("En fazla 10 malzeme seçebilirsiniz!");
      return;
    }

    if (checked) {
      setChoices([...choices, value]);
    } else {
      setChoices(choices.filter((ingredient) => ingredient !== value));
    }
  };

  return (
    <fieldset>
      <legend>
        <span>Ek Malzemeler</span><br />
        <span>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</span>
      </legend>
      {ingredientsList.map((ingredient, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name="extra"
            value={ingredient}
            checked={choices.includes(ingredient)}
            onChange={handleChange}
          />
          {ingredient}
        </label>
      ))}
      {choices.length > 0 && choices.length < 4 && (
        <p>En az 4 malzeme seçmelisiniz!</p>
      )}
    </fieldset>
  );
}

export default Ingredients;