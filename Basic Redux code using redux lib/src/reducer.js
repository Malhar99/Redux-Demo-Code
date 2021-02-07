import * as actions from './actionTypes'; // Import everything as actions

let lastId = 0;

// Reducers return a new state based on an action that was performed

export default function reducer(state = [], action) { // The initial state is an empty array []
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state, // Using spread operator to copy the array of all the bugs
                {   // A new bug object
                    id: ++lastId, // Every time we add a bug, we increment the lastId
                    description: action.payload.description, // This is the minimal information we need
                    resolved: false
                }
            ];            
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id); // Return the array that contains all the bugs except the bug with the given ID
        case actions.BUG_RESOLVED:
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true}
            ); // If the ID of the bug doesn't equal the payload ID, return as is. Otherwise, take a copy of the bug and set its resolved state to true
        default: // If none of the cases deem true
            return state; // If the action is neither bugAdded or bugRemoved, return the current state
    }
}

// This reducer is a pure function!
// So if we call it multiple times with the same argument, it will always return the same result without any side effects

// Without switch statement
// function reducer(state = [], action) {
//     if (action.type === 'bugAdded')
//     return [
//         ...state,
//         { 
//             id: ++lastId, 
//             description: action.payload.description,
//             resolved: false
//         }
//     ];
//     else if (action.type === 'bugRemoved')
//         return state.filter(bug => bug.id !== action.payload.id); 
    
//     return state;
// }