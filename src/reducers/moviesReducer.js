import {MOVIES_LIST} from "../actions/index"

const sortByDate = ( movies => {

    movies.sort(function (a, b) {
        return b.releaseYear - a.releaseYear;
    });

    return movies;
});

const moviesReducer = (state = [], action) => {

    switch(action.type){
        case MOVIES_LIST:
            return sortByDate(action.payload.slice());

        default: return state;
    }
}

export default moviesReducer;