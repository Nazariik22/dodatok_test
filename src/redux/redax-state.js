import {legacy_createStore as createStore,combineReducers} from 'redux';
import { userReduser } from './user-reduser';
import { composeWithDevTools } from '@redux-devtools/extension';
import { footerReduser } from './footer-reduser';
import { golovnaReducer } from './golovna-reduser';
import { personReducser } from './person-reduser';
import { createReducer } from './create-reduser';

const  rootReducer = combineReducers({
    user:userReduser,
    footer:footerReduser,
    golovna:golovnaReducer,
    personData:personReducser,
    create:createReducer,
})

const store = createStore(rootReducer,composeWithDevTools());

export {store}