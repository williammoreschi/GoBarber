import createSagaMiddlware from 'redux-saga';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlware = createSagaMiddlware({ sagaMonitor });

const middlwares = [sagaMiddlware];

const store = createStore(rootReducer, middlwares);

sagaMiddlware.run(rootSaga);

export default store;
