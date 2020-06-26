import React from 'react';
import classes from '../../../App.module.scss';
const PostCard = (props) => {
    return (
        <div className={classes.postCard}>
            <div className={classes.cardVote}>
                <p>{props.upvotes}</p>
            </div>
            <div className={classes.cardContent}>
                <div>
                    <h6>{props.subReddit}</h6>
                    <span>{props.date}</span>
                </div>
                <div>{props.title}</div>
                
                <p>{props.link}</p>
                <div>
                    <img src={props.image} alt=""/>
                </div>
                
            </div>
        </div>
    );
};

export default PostCard;