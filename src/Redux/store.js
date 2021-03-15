import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer  from './root-reducr' 

const middlewares = [ thunk ]

const initalState = {}

export const store = createStore(rootReducer,initalState, composeWithDevTools(applyMiddleware(...middlewares)))