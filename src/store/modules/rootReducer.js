import { combineReducers } from 'redux';

import auth from './auth/reducer';
import screen from './screen/reducer';

export default combineReducers({ auth, screen });
