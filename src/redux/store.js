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

/*
  saga파일은 부수효과가 발생되지 않는 순수함수

  순수함수 (Pure Vitual function)
  - 부수효과를 발생시키는 코드가 없는 함수

  부수효과 (SideEffect)
  - 특정 기능을 통해서 DOM이나 화면 렌러링등의 변경점을 야기시키는 효과
*/
