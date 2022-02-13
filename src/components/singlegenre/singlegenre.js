import React from 'react';
import css from "./singlegenre.module.css"

const Singlegenre = ({genre: {id, name}}) => {
    return (
        <div className={css.genreid}>
            <img className={css.genreimg} src={`${name}` + '.jpg'} alt=""/>
        </div>
    );
};

export {Singlegenre};