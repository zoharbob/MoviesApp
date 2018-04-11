import {DIALOG_DATA} from "../actions/index";

const dialogReducer = (state = {visibility: false}, action) => {

    switch (action.type){
        case DIALOG_DATA:
            return action.payload;

        default: return state;
    }
}

export default dialogReducer;