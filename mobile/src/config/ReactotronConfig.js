import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  /** Se no android ou no emulador nao aparecer nada tenta primeiro por
   * host: ip da maquina se não der usar o link abaixo
   * https://github.com/infinitered/reactotron/issues/162
   * */
  const tron = Reactotron.configure({host: '192.168.15.11'})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
