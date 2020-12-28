import React from 'react'
import s from './newspaper.module.css'

import {Heading} from "../heading/Heading";
import {Subtitle} from "../subtitle/Subtitle";
import {Article} from "../article/Article";

export const Newspaper = ({heading,subtitle,article}) => {
    return (
        <div className={s.newspaper}>
            <Heading heading={heading} />
            <Subtitle subtitle={subtitle}  />
            <Article article={article} />
        </div>

    )
};



