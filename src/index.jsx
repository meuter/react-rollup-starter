class HelloWorld extends React.Component {

    displayAlert() {
        alert("Hello " + this.props.name);
    }

    render() {
        return <h1 onClick={this.displayAlert.bind(this)}>
            Hello {this.props.name}
        </h1>;
    }
}

ReactDOM.render(<HelloWorld name="world!"/>, document.getElementById("app-placeholder"));