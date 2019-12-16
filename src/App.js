import React, {useContext } from 'react';
import {UserContext} from './index';

//PROPS DRILLING
// export default function App(props)
// <div>{props.username}</div>;
// DE-STRUCTURING
// export default function App({username}) {
//   return <div>
//     <Navbar username={username} />
//   </div>;  
// }

export default function App() {
  const value = useContext(UserContext)
  return <div>
    Hello, {value}
    {/* <UserContext.Consumer>
      {value => <div>Hello, {value}</div>}
    </UserContext.Consumer> */}
    </div>;
  
}

