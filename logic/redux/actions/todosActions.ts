import { ITodoActionDTO } from './../IDTOS.class';

function addTodo(text: string): ITodoActionDTO {
  return { type: 'ADD_TODO', text: text };
}

function toggleTodo(index: number): ITodoActionDTO {
  return { type: 'TOGGLE_TODO', index: index };
}

export { addTodo, toggleTodo };
