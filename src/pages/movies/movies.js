import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useForm} from "react-hook-form";


import {getMovies, getAllMovies} from "../../store";
import {Movie} from "../../components";
import css from "./movies.module.css";


const Movies = () => {
    const {movies, page, totalpages} = useSelector(state => state['movies']);
    const {genresrequest} = useSelector(state => state['genres']);
    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies())
    }, [])

    const submit = (droppage) => {
        const localpage = [];
        for (let index in droppage) {
            localpage.push(droppage[index])
        }

        dispatch(getMovies({data: genresrequest, page: parseInt(localpage)}));
        reset();
    }

    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <div className={css.movies}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <div className={css.pagenav}>
                <div className={css.droppage}>
                    <div> Перейти на страницу</div>
                    <form className={css.droppageform} onSubmit={handleSubmit(submit)}>
                        <input type="text" placeholder={'номер стр. от 1 до 500'} {...register('droppage')}/>
                        <button>перейти</button>
                    </form>
                </div>
                <div className={css.paginator}>
                    <div>
                        <button onClick={page < 2 ? (() => dispatch(getMovies({data: genresrequest, page: page})))
                            : (() => dispatch(getMovies({data: genresrequest, page: page - 1})))}>Prev Page
                        </button>
                    </div>
                    <div>Page: {page} of {totalpages}</div>
                    <div>
                        <button
                            onClick={page < totalpages ? (() => dispatch(getMovies({
                                    data: genresrequest,
                                    page: page + 1
                                })))
                                : (() => dispatch(getMovies({data: genresrequest, page: page})))
                            }>Next Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Movies};