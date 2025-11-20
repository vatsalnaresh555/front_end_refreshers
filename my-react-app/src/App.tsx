import "./App.css";
import Hello from "./Hello.tsx";
import { Counter } from "./components/Counter.tsx";
import { NameInput } from "./components/NameInput.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {
  const username = "Sairam";

  /* 
  // You can uncomment these one-by-one to test different components:

  // 1. Show Counter component
  // return (<div><Counter /></div>);

  // 2. Show NameInput component
  // return (<div><NameInput /></div>);

  // 3. Show Hello component
  // return (<Hello />); 
  */

  return (
    <div>
     
      <Dashboard username={username} />
    </div>
  );
}

export default App;
