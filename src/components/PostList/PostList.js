import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from './PostCard/PostCard';
import classes from '../../App.module.scss';
const getPosts = (subreddits, filter) => {
    let result
    if (filter !== "") {
        result = subreddits[filter]
    } else {
        result = Object.values(subreddits).flat()
    }
    return result.sort(function(a, b) {
        return b.upvotes - a.upvotes
    })
}

const PostList = (props) => {
    const posts = useSelector(state => getPosts(state.subreddits, state.filter));

    return (
        <div className={classes.postList}>
            {posts.map(post => <PostCard key={post.id} {...post} />)}
        </div>
    );
};

export default PostList;