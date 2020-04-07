import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { singInSuccess, singFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      // console.tron.error('Usuário não é um prestador');
      toast.error('Usuário não é um prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(singFailure());
  }
}

export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    toast.success('Falha no cadastro, verifique seus dados');
    history.push('/');
  } catch (err) {
    toast.error('Conta criado com sucesso');
    yield put(singFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SING_IN_REQUEST', singIn),
  takeLatest('@auth/SING_UP_REQUEST', singUp),
]);
