import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "msg",
            complete: false,
        }
    ],
    addTodo: (todo) => {},
    updatetodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider