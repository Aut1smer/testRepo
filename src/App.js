import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Main from './Main'
import Mine from './Mine'
function App() {
  return (
    <div className="App">
      <nav>nav</nav>
      <main>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/mine' element={<Mine />}></Route>
        </Routes>
      </main>
      <footer className="toolbar">
        <NavLink to='/' className={({ isActive }) => {
          return isActive ? 'selectedBtn' : null
        }}>主页</NavLink>
        <NavLink to='/mine' className={({ isActive }) => {
          return isActive ? 'selectedBtn' : null
        }}>我的</NavLink>
      </footer>
    </div>
  );
}

export default App;
