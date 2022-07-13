import './App.css';
import TodoInput from './components/TodoInput';
import Header from './Header';
import React, { useState } from "react";
import { UserContext } from './context/UserContext';



function App() {
  const [name, setName] = useState("이름");
  return (
    <UserContext.Provider value={{...UserContext}}>
    <div className="App">
      <Header/>
     <TodoInput/>
    </div>
    </UserContext.Provider>
  
  );
}

export default App;
