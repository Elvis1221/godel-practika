import React from 'react'
import s from './newspaper.module.css'

export const Newspaper = ({heading, subtitle, article}) => {

    return (
        <div className={s.newspaper}>
            <h1>
                {heading}
            </h1>
            <h3>
                {subtitle}
                <p>
                    {article}
                </p>
            </h3>
        </div>

    )
};



