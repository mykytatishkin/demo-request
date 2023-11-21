import axios from 'axios';
import React, { Component } from 'react';
import Picture from "../Components/Picture"

class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {"id":null, "title":"","author":"","price":0, items: []}
    }

    componentDidMount() {
        //this.getDataByFetch();
        this.getDataByAxios();
    }

    getDataByFetch = () => {
        fetch(this.props.url)
        .then( (response) => response.json() )
        .then( (data) => { this.setState( {items: [...data]}, () => {console.log(this.state);} ) } )
        .catch( (err) => { console.log(err); });
    }

    getDataByAxios = () => {
        axios.get(this.props.url)
        .then( response => { this.setState( {items: [...response.data]}, () => {console.log(this.state);} ) } ) 
        .catch( (err) => { console.log(err) })
    }

    addBook = () => {
        const toSend = { id: 0, title: this.state.title, author: this.state.author, price: this.state.price };
        console.log(toSend);

        /* Fetch API

        const fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(toSend)
        };

        fetch(this.props.url, fetchOptions)
        .then( (response) => { console.log(response) } )
        .catch( (err) => { console.log(err) } )

        */

        // AXIOS
        axios.post(this.props.url, toSend);
    }

    render() {
        return (
            <div>
                <h3>Books</h3>
                <hr/>
                <form>
                    <input type='text' name='title' placeholder='Title' onChange={ (event) => { this.setState( { title: event.target.value } ) } }/>
                    <input type='text' name='author' placeholder='Author' onChange={ (event) => { this.setState( { author: event.target.value } ) } }/>
                    <input type='text' name='price' placeholder='Price' onChange={ (event) => { this.setState( { price: event.target.value } ) } }/>
                    <button type='button' onClick={this.addBook}>Add Book</button>
                </form>
                { this.state.items && 
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map( (b, index) => { 
                            return <tr key={index}>
                            <td>{b.id}</td>
                            <td>{b.title}</td>
                            <td>{b.author}</td>
                            <td>{b.price}</td>
                            <td><b><button type='button' class='btn btn-dark btn-sm' onClick={ (event) => { this.setState({id: b.id}) } }>+</button></b></td>
                            </tr> })}
                    </tbody>
                </table>
                }
                {this.state.id &&
                    <Picture id={this.state.id} />
                }
            </div>
        );
    }
}

export default Client;