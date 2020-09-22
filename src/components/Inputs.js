import React from "react";
import './Input.css'

export default function Inputs({ title, handleCounter }) {
    const handleOnChange = ({ target }) => {
        handleCounter(target.value)
    }

    return (
        <div className='inputs'>
            <label>{title}</label>
            <input type='number' onInput={handleOnChange}></input>
        </div>
    );
}