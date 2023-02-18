// components
import CreateTodo from "./components/CreateTodo";
import ShowTask from "./components/ShowTask";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen py-10 bg-gradient">
      <div className="w-3/4 sm:w-1/3">
        <h1 className="text-3xl sm:text-4xl text-center font-semibold text-gray-800 pb-8">
          TODO
        </h1>
        <CreateTodo />
        <ShowTask />
      </div>
    </div>
  );
}

export default App;
