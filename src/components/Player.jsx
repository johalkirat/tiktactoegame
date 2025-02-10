import { useState } from "react";


export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    //var defaultVal = {name};
    const [defaultVal, setDefaultVal] = useState(name);
    const [editSave, seteditSave] = useState("Edit");

    let playerName = <span className="player-name" id="name">{defaultVal}</span>
    if (isEditing) {
        playerName = <input onChange={onInputChange} defaultValue={defaultVal}></input>
    }

    function onEditClicked() {
        setIsEditing(() => !isEditing);
        seteditSave((editSave == "Edit") ? "Save" : "Edit");
    }

    function onInputChange(event) {
        setDefaultVal(event.target.value);
    }

    return (
        <li className="player">
            <span>
                {playerName}
                <span id="symbol" className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEditClicked}>{editSave}</button>
        </li>
    );

}