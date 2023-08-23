import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
        }
    }

    // default case
    return state;
}

// createStore wants a pointer at reducer fxn as a parameter
const store = createStore(counterReducer);

export default store;
