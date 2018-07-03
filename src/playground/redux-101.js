import { createStore } from 'redux';

//Action generators - functions that return action objects

const add = ({a=0, b=0},c) => {
    return a+b+c;
};

console.log(add({a: 1, b: 100}, 22));


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy //same name can remove incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducers = (state = { count: 0 }, action) => {
    console.log('running', action);
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

//default store state
const store = createStore(countReducers)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//type keyword is required
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({decrementBy: 33}));

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'SET',
//     count: 10111
// });


store.dispatch(setCount({count: 999}));

store.dispatch(setCount());