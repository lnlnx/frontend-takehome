import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
// import { responseToPosts } from '../../utils/BookPreprocess';

export function* fetchPostsSaga() {
    try {
        const posts = yield call(fetch, 'https://www.reddit.com/.json');
        const postsData = yield posts.json()
        yield put({ type: actionTypes.FETCH_REDDITS_SUCCESS, posts: responseToItems(postsData.data) });
    } catch(error) { 
            yield  put({
                type: actionTypes.FETCH_REDDITS_FAIL,
                error: error
            })
    }
};

export function responseToItems(response) {
    return response.children.reduce(function(obj, post) {
        let date = new Date(0);
        date.setUTCSeconds(post.data.created_utc);
        const formatedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
        const thumbnail = post.data.thumbnail !== "self" ? post.data.thumbnail : null;

        const key = post.data.subreddit
        let postData = {
            id: post.data.id,
            title: post.data.title,
            image: thumbnail,
            date: formatedDate,
            upvotes: post.data.ups,
            link: post.data.url,
            subReddit: key
        }
        if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }
        obj[key].push(postData);
        return obj;
    }, {})
};