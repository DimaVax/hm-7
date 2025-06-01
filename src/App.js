import './App.css';
import { Component } from 'react';
import { TaskList } from './components/TaskLIst/TaskList';

export default class App extends Component{
  render() {
    return(
      <div className='App'>
        <TaskList />
      </div>
    );
  }
}
