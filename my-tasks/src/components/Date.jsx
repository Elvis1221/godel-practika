import React from 'react'
import s from './date.module.css'

export const Date = (props) => {

    return (
        <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас :</h2>
            {props.time}

        </div>

    );

};



