import type { FC } from 'react';
import type { Todo } from '../types';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

export const TodoList: FC<TodoListProps> = ({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">My Todo List</h1>

      <TodoForm onAddTodo={onAddTodo} />

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          <p>
            {todos.filter(todo => todo.completed).length} of {todos.length} tasks completed
          </p>
        </div>
      )}
    </div>
  );
};
