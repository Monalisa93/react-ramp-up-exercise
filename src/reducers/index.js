import { combineReducers } from 'redux';
import CustomersReducer from './reducer_customers';

const rootReducer = combineReducers ({
   //customers: CustomersReducer()
    customers: (state =[],action) => action.payload || state
});

export default rootReducer;