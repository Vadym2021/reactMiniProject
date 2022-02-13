import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./genre.module.css"
import {checkBoxChange} from "../../store";

const Genre = ({genre: {id, name}}) => {

    const {genresfilter} = useSelector(state => state['genres']);
    const dispatch = useDispatch();


    return (
        <div className={css.genre}>
            <div>{name}</div>
            <input type="checkbox" checked={genresfilter.status} onChange={() => dispatch(checkBoxChange({id, name}))}/>
        </div>

    );
};

export {Genre};