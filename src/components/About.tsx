import * as React from 'react';
import { TEST } from '../config/constants';
import { createStore } from 'redux';

export interface HelloProps { compiler: string; framework: string; }

function counter(state = 0, action : any) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app. 
// Its API is { subscribe, dispatch, getState }. 
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes. 
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly. 
// However it can also be handy to persist the current state in the localStorage. 
 
store.subscribe(() =>
  console.log(store.getState())
)
 
// The only way to mutate the internal state is to dispatch an action. 
// The actions can be serialized, logged or stored and later replayed. 
store.dispatch({ type: 'INCREMENT' })
// 1 
store.dispatch({ type: 'INCREMENT' })
// 2 
store.dispatch({ type: 'DECREMENT' })
// 1 

export class About extends React.Component<HelloProps, {}> {
	render() {
		return <h1>Hello from {this.props.compiler} and {this.props.framework}! with constant: {TEST}</h1>;
	}
}