import { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {

  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar la piedra del alma',
    //   done: false,
    // }
  ]

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) )
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO]: Add Todo',
      payload: todo
    }

    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO]: Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO]: Toggle Todo',
      payload: id
    });
  }


  return (
    <>
      <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
        </div>
        <div className="col-5">
          <h2>Add TODO</h2>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  )
}