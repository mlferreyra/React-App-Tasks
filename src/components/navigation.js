import React, {Component} from 'react';

//COMPONENTE 

class Navigation extends Component {
    render() {
        return (        
            <nav className="navbar navBar-dark bg-dark ">
                <a className="nav-link active" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
            </nav>              
        );
    }
}  
  export default Navigation;