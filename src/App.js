import React from 'react';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import FriendList from './components/FriendList'
import AddFriend from './components/AddFriend'
import Logout from './components/Logout'

function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <header>
        <h1>Friend Database</h1>
        <nav>
          <NavLink id="login" to="/Login">Login</NavLink>
          <NavLink id="friendList" to="/FriendList">FriendList</NavLink>
          <NavLink id="addFriend" to="/AddFriend">AddFriend</NavLink>
        </nav>
      </header>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="friendList" element={<FriendList />}/>
          <Route path="addFriend" element={<AddFriend />}/>
          <Route path="logout" element={<Logout />}/>
      </Routes>
          
    </div>
    </React.StrictMode>
  );
}

export default App;
