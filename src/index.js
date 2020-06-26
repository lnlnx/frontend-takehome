import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.css';
import { watchPosts } from './store/sagas';
import reducer from './store/reducers/post';
const composeEnhancers = process.env.NODE_ENV === "PROD" ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(watchPosts);
const app = (<Provider store={store}>
                  <App />
            </Provider>         
            )
ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

