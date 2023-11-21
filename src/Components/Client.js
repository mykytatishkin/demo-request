import React, { Component } from 'react';

class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {"id":0, "title":"","author":"","price":0}
    }

    componentDidMount() {
        this.getDataByFetch();
    }

    getDataByFetch = () => {
        fetch(this.props.url)
        .then( (response) => response.json() )
        .then( (data) => { this.setState( {items: [...data]}, () => {console.log(this.state);} ) } )
        .catch( (err) => { console.log(err); });
    }

    getDataByAxios = () => {

    }

    render() {
        return (
            <div>
                <h3>Books</h3>
                <hr/>
                { this.state.items && 
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map( (b, index) => { return <tr key={index}><td>{b.id}</td><td>{b.title}</td><td>{b.author}</td><td>{b.price}</td></tr> })}
                    </tbody>
                </table>
                }
            </div>
        );
    }
}

export default Client;