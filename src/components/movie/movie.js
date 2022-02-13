import React from 'react';

import css from "./movie.module.css"
import {Link} from "react-router-dom";
import {Singlegenre} from "../singlegenre/singlegenre";
import {Stars} from "../stars/stars";


const Movie = ({movie: {id, backdrop_path, title, popularity, vote_average, genre_ids}}, mgenres) => {


    const localgenres = [];
    for (let i = 0; i < genre_ids.length; i++) {
        localgenres.push({
            id: Math.floor(Math.random() * 1000),
            name: genre_ids[i]
        })
    }

    return (
        <div className={css.moviegrid}>
            <div className={css.moviewrap}>
                <Link className={css.movie} to={id.toString()}>
                    <div className={css.img}><img className={css.img}
                                                  src={'https://image.tmdb.org/t/p/original' + `${backdrop_path}`}
                                                  alt=""/>
                    </div>
                    <div>Title: {title}</div>
                    <div>Popularity: {popularity}</div>
                    <div>Rating: {vote_average}</div>

                    <div className={css.genres}>

                        {/*{*/}
                        {/*    genre_ids.map(genreid => <img className={css.genreid} src={`${genreid}` + '.jpg'}*/}
                        {/*                                  alt=""/>)*/}
                        {/*}*/}

                        {
                            localgenres.map(genre => <Singlegenre key={genre.id} genre={genre}/>)
                        }
                    </div>
                </Link>
                <div className={css.stars}>
                    <Stars/>
                </div>
            </div>
        </div>
    );
};

export {Movie};