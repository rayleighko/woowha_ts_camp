import { createStore } from './redux.js'

function reducer(state, action) {
    if (action.type === 'abc') {
        return {
            ...state,
            abc: 'OK'
        }
    }

}

function update() {
    const state = store.getyState()
    console.log(state)
}

const store = createStore(reducer)

store.subscribe(update)

store.dispatch({ type: 'abc' })