export function createStore(reducer) {
    let state;
    const listeners = [];

    const getyState = () => {
        return { ...state }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(Fn => Fn())
    }

    const subscribe = (Fn) => { listeners.push(Fn) }

    return {
        getyState,
        dispatch,
        subscribe
    }
}