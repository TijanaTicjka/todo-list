import './App.css';
import { Header } from './components/Header';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <Todos></Todos>
    </div>
  )
}

export default App;
