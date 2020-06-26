import React from 'react';
import classes from '../../../App.module.scss';
const PostCard = (props) => {
    return (
        <div className={classes.postCard}>
            <div className={classes.cardVote}>
                <p>Upvotes: {props.upvotes}</p>
            </div>
            <div className={classes.cardContent}>
                <h4>{props.subReddit}</h4>
                <span>{props.date}</span>
                <div>{props.title.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&')}</div>
                <p><a href={props.link}>Click here to original post</a></p>
                {props.image && <img src={props.image} alt=""/> }
                
            </div>
        </div>
    );
};

export default PostCard;