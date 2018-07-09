import React from 'react';
import './App.css';

import TodoList from "./components/TodoList"

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <header>
              To do list
          </header>
       <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
