import { persistStore } from 'redux-persist';
import createSagaMiddlware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlware = createSagaMiddlware({ sagaMonitor });

const middlwares = [sagaMiddlware];

const store = createStore(persistReducers(rootReducer), middlwares);
const persistor = persistStore(store);

sagaMiddlware.run(rootSaga);

export { store, persistor };
