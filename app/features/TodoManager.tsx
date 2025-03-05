import { type FC, useEffect, useState } from 'react';
import { TodoList } from '../components';
import { addTodo, deleteTodo, getTodos, toggleTodo } from '../services/todoService';
import type { Todo } from '../types';

export const TodoManager: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTodos(getTodos());
      setIsLoading(false);
    }
  }, []);

  const handleAddTodo = (text: string) => {
    const newTodo = addTodo(text);
    setTodos(prev => [...prev, newTodo]);
  };

  const handleToggleTodo = (id: string) => {
    const updatedTodos = toggleTodo(id);
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = deleteTodo(id);
    setTodos(updatedTodos);
  };

  if (isLoading) {
    return <div className="flex justify-center p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <TodoList
        todos={todos}
        onAddTodo={handleAddTodo}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};
