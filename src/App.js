import React from 'react';

import {Routes, Route, Link} from 'react-router-dom'
import {Movies, Genres, Layout, Header} from "./pages"
import {Singlemovie} from "./components";


function App() {


    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<Movies/>}>
                        <Route path={'/:id'} element={<Singlemovie/>}>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
