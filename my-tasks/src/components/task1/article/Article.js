import React from 'react'
import s from './article.module.css'

export const Article = ({article}) => {

    return (
        <div className={s.article}>
            <p>
                {article}
            </p>
        </div>
    )
};



