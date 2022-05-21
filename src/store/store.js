import {createStore, combineReducers} from 'redux';
import serviceList from "./reducers/serviceList";
import serviceItem from "./reducers/serviceItem";


const rootReducer = combineReducers({
    serviceList,
    serviceItem
});

export default createStore(rootReducer);
