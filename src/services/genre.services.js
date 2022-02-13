import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const genreService = {

    getGenres: () => axiosService.get(`${urls.genre}${urls.apiKey}`).then(value => value.data),

}