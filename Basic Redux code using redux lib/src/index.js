// Didn't have to wrap { store } in curly braces because we exported it as default in store.js
import store from './store';
import { bugAdded, bugResolved } from './actions';

// UI components should "subscribe" to the store, so whenever the state of the store changes, it knows what to do in response
// const unsubscribe = store.subscribe(() => {
//     console.log('Store changed!', store.getState());
// })

// This is going to call the reducer, give it the current state, and add the action it dispatched
// When the user clicks the add button, the bugAdded gets dispatched
store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));

// If the current UI component is not going to be visible, we should unsubscribe it from the store
// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// });

console.log(store.getState());
// Note that in Redux, there is only getState, no setState (as there is in React)
// This is fundamental in Redux
// So every time we want to update a state, we have to use actions