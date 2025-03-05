import type { Todo } from '../types';

const TODO_STORAGE_KEY = 'todos';

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const getTodos = (): Todo[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error('Error getting todos from localStorage:', error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
};

export const addTodo = (text: string): Todo => {
  const newTodo: Todo = {
    id: generateId(),
    text,
    completed: false,
    createdAt: Date.now(),
  };

  const todos = getTodos();
  saveTodos([...todos, newTodo]);

  return newTodo;
};

export const toggleTodo = (id: string): Todo[] => {
  const todos = getTodos();
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );

  saveTodos(updatedTodos);
  return updatedTodos;
};

export const deleteTodo = (id: string): Todo[] => {
  const todos = getTodos();
  const updatedTodos = todos.filter(todo => todo.id !== id);

  saveTodos(updatedTodos);
  return updatedTodos;
};
