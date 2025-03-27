import React from "react";

function Dough({dough, setDough}) {
    return (
        <div className="dough">
            <label htmlFor="dough">Hamur Seç*</label>
                <select id="dough" name="dough" value={dough} onChange={(event) => setDough(event.target.value)}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="thick">Kalın Hamur</option>
                    <option value="thin">İnce Hamur</option>
                </select>
        </div>
    );
}

export default Dough;