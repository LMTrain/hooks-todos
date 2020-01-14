import React, {useContext, useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoContext from './context';
import todoReducer from './reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Axios from 'axios';


const useAPI = endpoint => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await Axios.get(endpoint)
        setData(response.data)
    }

    return data;
}

const App = () => {
    const initialState = useContext(TodoContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const savedTodos = useAPI("https://todos-hooks-api-5lt7sbez2.now.sh/todos")

    useEffect(() => {
        dispatch({
            type: "GET_TODOS",
            payload: savedTodos
        })
    }, [savedTodos])

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
