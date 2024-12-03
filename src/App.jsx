import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-700 mt-12 mb-6">
        Learn About Redux Toolkit
      </h1>

      {/* AddTodo Component */}
      <div className="w-full max-w-lg px-4">
        <AddTodo />
      </div>

      {/* Todos Component */}
      <div className="w-full max-w-lg px-4 mt-8">
        <Todo />
      </div>
    </div>
  );
}

export default App;
