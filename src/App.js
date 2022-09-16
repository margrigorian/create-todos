import './App.css';
import StartPage from './components/startpage/StartPage';
import TodosPage from './components/todospage/TodosPage';
import { useSelector } from 'react-redux';


function App() {
  const userInfo = useSelector((state) => state.user);

  return (
      <div className="App">
        {userInfo.name === "" || userInfo.email === "" ? <StartPage /> : <TodosPage />}
      </div>
  );
}

export default App;
