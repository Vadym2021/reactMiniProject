import React, {useState} from 'react';


import css from "./stars.module.css"
import {FaStar} from "react-icons/fa";

const Stars = () => {
    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null)

    return (
        <div>
            {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1;


                return <label>
                    <input type="radio" name="rating" value={ratingValue}
                           onClick={() => setRating(ratingValue)}

                    />
                    <FaStar className={css.star} color={ratingValue <= (hover || rating) ? "#ffc107" : "darkgrey"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                    />
                </label>
            })}

        </div>
    );
};

export {Stars};