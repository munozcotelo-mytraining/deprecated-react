interface ITodoActionDTO {
  type: string;
  text?: string;
  index?: number;
}

interface IVisibilityFilterActionDTO {
  type: string;
  filter: string;
}

interface IAsyncActionDTO {
  type: string;
  data: IAsyncDTO;
}

interface ITodoDTO {
  text: string;
  completed: boolean;
}

interface IAsyncDTO {
  elements: string[];
  error: boolean;
  fetching: boolean;
}

interface IStateDTO {
  todos: ITodoDTO[];
  visibilityFilter: string;
  async: IAsyncDTO;
}

export {
  IStateDTO,
  IAsyncDTO,
  ITodoDTO,
  ITodoActionDTO,
  IVisibilityFilterActionDTO,
  IAsyncActionDTO
};
