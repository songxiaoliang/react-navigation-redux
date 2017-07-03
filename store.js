/**
 * 创建Store,整合Provider
 * Songlcy create by 2017-01-10
 * @flow
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import navReducer from './NavReducer';
import rootReducer from './rootReducer';

const middlewares = [thunk.withExtraArgument()];
const middleware = applyMiddleware(...middlewares);

let store = createStore(rootReducer(navReducer), {}, middleware);

export default store;