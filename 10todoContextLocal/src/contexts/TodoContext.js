import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (todo) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider;

// clasic example of custom hook
export const useTodo = () => {
    return useContext(TodoContext)
}