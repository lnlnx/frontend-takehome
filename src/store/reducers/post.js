import * as actionTypes from '../actions/actionTypes';

const initialState = {
    subreddits: {},
    filter: "",
    loading: false,
    error: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REDDITS:
            return { ...state };
        case actionTypes.FETCH_REDDITS_START:
            return { ...state, loading: true };
        case actionTypes.FETCH_REDDITS_SUCCESS:
            return { 
                ...state,
                subreddits: action.posts,
                loading: false
             };
        case actionTypes.FETCH_REDDITS_FAIL:
            return {
                 ...state,
                loading: false,
                error: action.error
             };
        case actionTypes.SET_FILTER:
            return { 
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}

export default postReducer;

 