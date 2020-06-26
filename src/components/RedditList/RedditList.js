import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/post';
import classes from '../../App.module.scss';

const RedditList = (props) => {
    const subReddits = useSelector(state => Object.keys(state.subreddits));
    const selectedFilter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    return (
        <div className={classes.redditListWrap}>
            <div className={classes.redditList} >
                <div className={classes.redditHeaderWrapper}>
                    <h2 className={classes.redditListHeader}>Subreddit List</h2>
                </div>
                <div
                    className={selectedFilter === "" ? [classes.reddit, classes["reddit--selected"]].join(" "): classes.reddit}
                    key={""}
                    onClick={() => dispatch(setFilter(""))}>All Subreddits</div>
                {subReddits.map(subReddit => <div
                    className={selectedFilter === subReddit ? [classes.reddit, classes["reddit--selected"]].join(" "): classes.reddit}
                    key={subReddit}
                    onClick={() => dispatch(setFilter(subReddit))}>{subReddit}</div>)}
            </div>

        </div>
    );
};




export default RedditList;