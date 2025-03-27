import React from "react";

function Note({note, setNote}) {
    return (
        <div>
            <label htmlFor="note">Sipariş Notu</label>
            <textarea id="note" name="note" type="text" value={note} onChange={(event) => setNote(event.target.value)}></textarea>
        </div>
    );
}

export default Note;