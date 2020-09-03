import { createStore } from './redux.js'

const INCREMENT = 'increment'
const RESET = 'reset'

function reducer(state = {}, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            count: state.count ? state.count + 1 : 1
        }
    }
    if (action.type === RESET) {
        return {
            ...state,
            count: action.resetCount
        }
    }

}

function update() {
    const state = store.getyState()
    console.log(state)
}

const store = createStore(reducer)

store.subscribe(update)

function actionCreator(type, data) {
    return {
        ...data,
        type: type
    }
}

function increment() {
    store.dispatch(actionCreator(INCREMENT))
}

function reset() {
    store.dispatch(actionCreator(RESET, { resetCount: 0 }))
}

increment()
increment()
increment()
reset()
increment()
increment()
