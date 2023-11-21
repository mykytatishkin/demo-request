import React, { Component } from 'react';

class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {"id":0, "title":"","author":"","price":0}
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                Client
            </div>
        );
    }
}

export default Client;