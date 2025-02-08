import { useState } from "react";


export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);
    const [editSave, seteditSave] = useState("Edit");
    function onEditClicked(){
        setIsEditing(!isEditing);
        //seteditSave();
    }
    return(
        <li className="players">
            <span>
            {!isEditing}<span id="name">{name}</span>
            {isEditing}<input text={name}></input>
            <span id="symbol">{symbol}</span>
            </span>
           <button onClick={onEditClicked}>{editSave}</button>
        </li>
    );

}