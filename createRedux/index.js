import { createStore } from './redux.js'

const INCREMENT = 'increment'

function reducer(state = {}, action) {
    if (action.type === INCREMENT) {
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

function actionCreator(type) {
    return {
        type: type
    }
}

function increment() {
    store.dispatch(actionCreator(INCREMENT))
}

increment()
