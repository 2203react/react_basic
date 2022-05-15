import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';

//createSagaMiddleware를 store에 적용
//reducer를 store에 적용하기전 sagaMiddleware를 비동기적으로 실행
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//store에 적용된 sagaMiddleware를 통해 rootSaga기능을 적용
sagaMiddleware.run(rootSaga);

export default store;
