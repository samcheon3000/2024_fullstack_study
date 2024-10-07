import logo from './logo.svg';
import './App.css';
import Gallery from './Profile.js'; // Gallery import
import TodoList from './Todolist.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Gallery /> {/* Gallery 컴포넌트 사용 */}
      <TodoList />
    </div>
  );
}


export default App;
