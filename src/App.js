import "./App.css";
import Card from "./Components/Card";
import { TodoWrapper } from "./Components/TodoWrapper";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Card className="App">
        <TodoWrapper />
      </Card>
    </TodoProvider>
  );
}

export default App;
