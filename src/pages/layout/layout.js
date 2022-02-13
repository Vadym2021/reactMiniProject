import React from 'react';

import {Genres} from "../index"
import css from "./layout.module.css"
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={css.layout}>
            <Genres/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};