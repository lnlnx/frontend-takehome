import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/post';
import classes from '../../App.module.scss';

const RedditDropdown = (props) => {
    const subReddits = useSelector(state => Object.keys(state.subreddits));
    const selectedFilter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const body = [<option key="">All Reddits</option>].concat(subReddits.map((subreddit) => {
        return <option key={subreddit}>{subreddit}</option>
    }));

    const onChangeHandler = (event) => {
        const eventValue = event.target.value;
        if (eventValue === "All Reddits") {
            dispatch(setFilter(""));
        } else {
            dispatch(setFilter(eventValue));
        }
    }

    return (
        <div className={classes.redditDropdown}>
            <select onChange={onChangeHandler}
            value={selectedFilter === "" ? "All Reddits" : selectedFilter}
            >
                {body}
            </select>
        </div>
    );
};

export default RedditDropdown;