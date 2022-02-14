import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieImById, getMovieImgs} from "../../store";
import css from "./singlemovie.module.css"
import {Img} from "../../components";


const Singlemovie = () => {

    const {movie, imgs, smgenres} = useSelector(state => state['movies']);


    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMovieImById({id: id}))
    }, [id])

    useEffect(() => {
        dispatch(getMovieImgs({id: id}))
    }, [id])

    return (
        <div>
            <div className={css.singlemovie}>
                <div>{movie.title}</div>
                <div>{movie.tagline}</div>
                <div className={css.img}><img className={css.img}
                                              src={'https://image.tmdb.org/t/p/original' + `${movie.backdrop_path}`}
                                              alt=""/></div>
                <div>Story : {movie.overview}</div>
                <div>Жанр:</div>

                <div>
                    {
                        smgenres.map(genreid => <img src={`${genreid.id}` + '.jpg'} alt=""/>)
                    }
                </div>
                <div>Дата выхода : {movie.release_date}</div>
                <div>Рейтинг : {movie.vote_average}</div>
                <div>Сайт : {movie.homepage}</div>

                {/*<div>Кадры из фильма :</div>*/}
                {/*<div>*/}
                {/*    {*/}
                {/*        imgs.map(img => <Img  img={img}/>)*/}
                {/*    }*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export {Singlemovie};