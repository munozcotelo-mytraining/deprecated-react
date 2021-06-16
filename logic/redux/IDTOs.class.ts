interface ITodoActionDTO {
  type: string;
  text: string;
}

interface IVisibilityFilterActionDTO {
  type: string;
  filter: string;
}

interface ITodoDTO {
  text: string;
  completed: boolean;
}

interface IStateDTO {
  todos: ITodoDTO[];
  visibilityFilter: string;
}

export { IStateDTO, ITodoDTO, ITodoActionDTO, IVisibilityFilterActionDTO };
