import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const movieService = {
    getMovieImById: (id) => axiosService.get(`${urls.movie}/${id}${urls.apiKey}`).then(value => value.data),
    getMovies: (page) => axiosService.get(`${urls.discover}/${urls.apiKey}`, {params: {page}}).then(value => value.data),
    getMovieImg: (id) => axiosService.get(`${urls.movie}/${id}/${urls.images}${urls.apiKey}`).then(value => value.data),
    getMovieByFilter: (data, page, year) => axiosService.get(`${urls.discover}${urls.apiKey}${urls.withgenres}${data}${urls.page}${page}${urls.year}${year}`).then(value => value.data),
}