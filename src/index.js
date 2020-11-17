import './styles.css';

import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach((todo)=>{crearTodoHtml(todo)}) 
todoList.todos.forEach(crearTodoHtml) 


console.log('todos', todoList.todos);


    

// todoList.todos[0].imprimirClase()


// const tarea = new Todo('Aprender Javascript')

// todoList.nuevoTodo(tarea)

// // tarea.completado = true;

// console.log(todoList);

// crearTodoHtml( tarea )


// localStorage.setItem('my-key','ABC123')
// sessionStorage.setItem('my-key','ABC123')
// localStorage.clear()
// sessionStorage.clear()

// setTimeout(()=>{

//     localStorage.removeItem('my-key')

// },5000)
