import React from 'react'
import s from './heading.module.css'

export const Heading = ({heading}) => {

    return (
        <div className={s.heading}>
            <h1>
                {heading}
            </h1>

        </div>

    )
};



