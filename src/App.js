import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/post';
import RedditList from './components/RedditList/RedditList';
import PostList from './components/PostList/PostList';
import classes from './App.module.scss';
import Spinner from './UI/Spinner';
class App extends Component {
  componentDidMount () {
    this.props.onLoad()
  }
  
  render() {
    const appBody = <p>Failed loading reddit!</p> 
    const content = this.props.loading ? <Spinner/> : 
      <div className={classes.row}> 
        <PostList />
        <RedditList />
      </div>

    return ((this.props.error && appBody) || content);
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onLoad: () => dispatch(actions.redditsFetchStart())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
