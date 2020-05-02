import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess } from '~/store/modules/auth/actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'login', {
      email,
      password,
    });

    const { token, name } = response.data;

    yield put(signInSuccess(token, name));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro na autenticação, verifique seus dados');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);