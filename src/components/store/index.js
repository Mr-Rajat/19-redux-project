// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';
// more enhance than the createReducer which is also available with toolkit
// configure store also create a store like createStore but it makes merging multiple reducers into 1 reducer easier.

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter", // name of reducer
    initialState,  // using single value due to key and value have same name
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter= state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const store = configureStore({
    // expected property reducer
    reducer: counterSlice.reducer
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
