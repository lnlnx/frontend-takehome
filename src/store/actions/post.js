import * as actionTypes from './actionTypes';

export const redditsFetchFail = (error) => {
    return {
        type: actionTypes.FETCH_REDDITS_FAIL,
        error: error
    }
} 

export const redditsFetchStart = () => {
    return {
        type: actionTypes.FETCH_REDDITS_START 
    }
} 

export const redditsFetchSuccess = (postList) => {
    return {
        type: actionTypes.FETCH_REDDITS_SUCCESS,
        posts: postList
    }
} 

export const setFilter = (filter) => {
    return {
        type: actionTypes.SET_FILTER,
        filter: filter
    }
}