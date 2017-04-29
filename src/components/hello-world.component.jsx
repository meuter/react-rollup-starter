import React from 'react';

class HelloWorld extends React.Component {

    displayAlert() {
        alert("Hello " + this.props.name);
    }

    render() {
        return <div className="container">
            <h1>Hello {this.props.name}<i className="fa fa-check" style={{color:"green"}} aria-hidden="true"></i></h1>
            <span onClick={this.displayAlert.bind(this)} className="btn btn-primary">Click me!</span>
        </div>
    }
}

export default HelloWorld;