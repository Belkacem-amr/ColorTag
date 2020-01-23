// Store/configureStore.js

import { createStore } from 'redux';
import {toggleSettings} from './Reducers/favoriteReducer'

export default createStore(toggleSettings)