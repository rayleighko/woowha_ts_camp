import { createStore } from './redux.js'

function reducer(state = {}, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count ? state.count + 1 : 1
        }
    }

}

function update() {
    const state = store.getyState()
    console.log(state)
}

const store = createStore(reducer)

store.subscribe(update)

store.dispatch({ type: 'increment' })