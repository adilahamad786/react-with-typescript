import Todos from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  return (
    <div>
      <Todos items={[ new Todo('Learn React'), new Todo('Learn TypeScript') ]}/>
    </div>
  );
}

export default App;
