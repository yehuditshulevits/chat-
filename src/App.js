import './App.css';
import Chat from './Chat';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Login from './Login';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/Chat' element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
