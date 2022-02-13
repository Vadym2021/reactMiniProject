import React from 'react';
import {Daynight} from "../../components";
import css from "./header.module.css"

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.mworld}>MOVIE WORLD</div>
            <div className={css.user}>
                <div className={css.userlogo}></div>
                <div className={css.username}> Lenne Gregham</div>
            </div>
            <div><Daynight/></div>
        </div>
    );
};

export {Header};