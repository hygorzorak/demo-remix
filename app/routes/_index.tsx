import type { MetaFunction } from '@remix-run/node';
import { TodoManager } from '../features/TodoManager';

export const meta: MetaFunction = () => {
  return [
    { title: 'Todo App - Remix' },
    { name: 'description', content: 'A simple Todo app built with Remix' },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
        <TodoManager />
      </div>
    </div>
  );
}
