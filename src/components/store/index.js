// import { createStore } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
// createSlice more enhance than the createReducer which is also available with toolkit
// configure store also create a store like createStore but it makes merging multiple reducers into 1 reducer easier.

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    // expected property reducer
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
});



// // Reducer for simple createStore with redux above is toolkit store

// const counterReducer = (state = initialState, action) => {

//     if(action.type === 'increment'){
//         return {
//             // ...state,
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.payload,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }

//     // default case
//     return state;
// }

// // createStore wants a pointer at reducer fxn as a parameter
// const store = createStore(counterReducer);

export default store;
