import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`)

    const upcomingSate = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming State: ${JSON.stringify(upcomingSate)}`);

    // pass action 
    return next(action);
}

export default myLogger;