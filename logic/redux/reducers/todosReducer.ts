import { ITodoDTO, ITodoActionDTO } from './../IDTOS.class';

function todosReducer(state: ITodoDTO[] = [], action: ITodoActionDTO) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export { todosReducer };
