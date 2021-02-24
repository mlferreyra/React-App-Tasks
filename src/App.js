import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Formulario from './components/Formulario';

import { todos } from './todos.json';
import { Component } from 'react';

//COMPONENTE 

class App extends Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = { 
      todos
    };
    this.handleAppTodo = this.handleAppTodo.bind(this);
  }

  handleAppTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  RemoveTodo(index){
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    })
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
        return(
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-header"> 
                <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.prioridad}
                </span>
              </div>
              <div className="card-body">
                <p>{todo.descripcion}</p>
                <p><mark>{todo.responsable}</mark></p>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={this.RemoveTodo.bind(this, i)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )
      })
      
      return (
      <div className="App">
        <Navigation />
        <div className="container">
          <a href="index.js" className="text-white">TASKS
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </div>  
        <div className="container">
              <img src={logo} className="App-logo" alt="logo" />
        </div>          
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <Formulario onAddTodo={this.handleAppTodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
