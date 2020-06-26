import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/post';
import RedditList from './components/RedditList/RedditList';
import PostList from './components/PostList/PostList';
import classes from './App.module.scss';
class App extends Component {
  componentDidMount () {
    this.props.onLoad()
  }

  render() {
    return (
      <div className={classes.row}> 
         <PostList />
         <RedditList />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onLoad: () => dispatch(actions.redditsFetchStart())
  }
};


export default connect(null, mapDispatchToProps)(App);
