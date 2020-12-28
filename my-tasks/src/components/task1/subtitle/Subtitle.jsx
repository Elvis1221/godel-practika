import React from 'react'
import s from './subtitle.module.css'

export const Subtitle = ({subtitle}) => {

    return (
        <div className={s.subtitle}>
            <h3>
                {subtitle}
            </h3>
        </div>

    )
};



