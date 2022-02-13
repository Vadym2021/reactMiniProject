import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';

import {getGenres, getMovies} from "../../store"
import {Genre} from "../../components";
import css from "./genres.module.css"


const Genres = () => {

    const {genres, genresrequest} = useSelector(state => state['genres']);
    const dispatch = useDispatch();
    const [localyearform, setLocalyearform] = useState({dropyear: ''})

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const formHandler = (e) => {
        const dropyear = {[e.target.dropyear]: e.target.value}
        const localyear = [];
        for (let index in dropyear) {
            localyear.push(dropyear[index])
            setLocalyearform(parseInt(localyear))
        }
    }

    return (
        <div className={css.genresbody}>
            <div className={css.dropyear}>
                <div> Год выпуска:</div>
                <form>
                    <label>
                        <input type="text" name={'dropyear'} value={localyearform.dropyear} onChange={formHandler}
                               placeholder={'год выпуска'}/>
                    </label>
                </form>
            </div>
            <div className={css.genres}>
                <div>
                    {
                        genres.map(genre => <Genre key={genre.id} genre={genre}/>)
                    }
                </div>
                <div>
                    <button onClick={() => dispatch(getMovies({
                        data: genresrequest,
                        page: 1,
                        year: localyearform
                    }))}>Применить
                    </button>
                </div>
            </div>
        </div>
    );
};

export {Genres};