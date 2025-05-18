import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export type TypeNewTodo = {
  id: null;
  userId: number;
  title: string;
  completed: boolean;
};

export const getTodos = (id: number) => {
  return client.get<Todo[]>(`/todos?userId=${id}`);
};

export const postTodos = (data: TypeNewTodo) => {
  return client.post<Todo[]>(`/todos`, data);
};

export const patchTodos = (id: number, data: Partial<Todo>) => {
  return client.patch<Todo>(`/todos/${id}`, data);
};

export const deleteTodos = (id: number) => {
  return client.delete(`/todos/${id}`);
};
