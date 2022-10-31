import './styles.css';
import { TodoList } from './classes';
import { createTodoHtml } from './js/componentes';

export const todoList = new TodoList();

console.log(todoList.todos);
todoList.todos.forEach(createTodoHtml);