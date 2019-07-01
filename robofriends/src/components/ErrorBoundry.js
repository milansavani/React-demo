import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrof: false
        }
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        const { hasError } =this.state;

        return hasError ?
            <h2>Ooooops... This is not good.</h2> :
            this.props.children
    };
}

export default ErrorBoundry;
