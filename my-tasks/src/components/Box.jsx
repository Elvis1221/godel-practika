import React from 'react'
import s from './box.module.css'

export const Box = props => {
    const {text} = props;

    const textTest = text === 'test1' ? 'aaaaaaaaaaa' : text;

    return (
        <div className={s.box}>
            {textTest}
        </div>

    )
};



