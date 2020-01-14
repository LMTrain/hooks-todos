import React, {useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoContext from './context';
import todoReducer from './reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const App = () => {
    const initialState = useContext(TodoContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch}}>
            <TodoForm />
            <TodoList />
       
        </TodoContext.Provider>
    )
    
}

//<== PROPS DRILLING ==>
// const username= "Laycon"
// ReactDOM.render(<App username={username}/>, document.getElementById('root'));

// export const  UserContext = React.createContext()
// const username = "Laycon"

// ReactDOM.render(
//     <UserContext.Provider value={username}>
//         <App />
//     </UserContext.Provider>

// , document.getElementById('root'));

ReactDOM.render(
    
    <App />,


document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
