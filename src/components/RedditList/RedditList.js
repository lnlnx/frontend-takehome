import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/post';
import classes from '../../App.module.scss';

const RedditList = (props) => {
    const subReddits = useSelector(state => Object.keys(state.subreddits));
    const dispatch = useDispatch();
    return (
        <div className={classes.redditListWrap}>
            <div className={classes.redditList} >
            <div className={classes.redditHeaderWrapper}>
                <h5 className={classes.redditListHeader}>Subreddit List</h5>
            </div>
            {subReddits.map(subReddit => <div 
                className={classes.reddit}
                key={subReddit}
                onClick={()=> dispatch(setFilter(subReddit))}>{subReddit}</div>)}
            </div>
            
        </div>
    );
};




export default RedditList;