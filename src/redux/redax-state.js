import {legacy_createStore as createStore,combineReducers} from 'redux';
import { userReduser } from './user-reduser';
import { composeWithDevTools } from '@redux-devtools/extension';
import { footerReduser } from './footer-reduser';
import { golovnaReducer } from './golovna-reduser';
import { personReducser } from './person-reduser';

const  rootReducer = combineReducers({
    user:userReduser,
    footer:footerReduser,
    golovna:golovnaReducer,
    personData:personReducser
})

const store = createStore(rootReducer,composeWithDevTools());

export {store}