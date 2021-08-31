import _ from 'lodash';
import {
    FETCH_POSTS,
    CREATE_POST,
    FETCH_POST ,
    EDIT_POST,
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_POST:
            return { ...state, [action.payload.id]: action.payload}
        case EDIT_POST:
            return { ...state, [action.payload.id]: action.payload}
        case FETCH_POSTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}