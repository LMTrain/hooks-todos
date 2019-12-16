import React, {useContext, useReducer } from 'react';
import {UserContext} from './index';

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      }
    case "reset":
      return initialState
    default:
      return initialState
  }
}

//PROPS DRILLING
// export default function App(props)
// <div>{props.username}</div>;
// <== DE-STRUCTURING ===>
// export default function App({username}) {
//   return <div>
//     <Navbar username={username} />
//   </div>;  
// }

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext);

  return (
  <div>
   
    {/* <UserContext.Consumer>
      {value => <div>Hello, {value}</div>}
    </UserContext.Consumer> */}
    count: {state.count}
    <button 
      className="border m-2 p-1"
      onClick={() => dispatch({ type: "increment"})}
    >
      Increment
    </button>
    <button 
      className="border m-2 p-1"
      onClick={() => dispatch({ type: "decrement"})}
    >
      Decrement
    </button>
    <button 
      className="border m-2 p-1"
      onClick={() => dispatch({ type: "reset"})}
    >
      Reset
    </button>
  </div>
  
  );
  
}

