import React, {Component} from 'react';

class Formulario extends Component {
    constructor() {
        super();
        // No llames this.setState() aquí!
        this.state = { 
            title: '',
            responsable: '',
            descripcion: '',
            prioridad: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        //onAddTodo recibe la nueva tarea para agregaar 
        this.props.onAddTodo(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Titulo"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" onChange={this.handleInput} className="form-control" placeholder="Responsable"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion" onChange={this.handleInput} className="form-control" placeholder="Descripcion"/>
                    </div>
                    <div className="form-group">
                        <select name="prioridad" onChange={this.handleInput} className="form-control">
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>                    
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        )
    }
}

export default Formulario;