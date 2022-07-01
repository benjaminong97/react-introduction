import React from 'react';
import axios from 'axios';

export default class Shop extends React.Component {
    state =  {
        products: []
    }

    async componentDidMount() {
        // when using axios, JSON file be in public
        let response = await axios.get('/products.json')
        this.setState({
            products: response.data,
            loaded: true
        })
    }

    renderProducts() {
        if (this.state.products) {
            return (
                <ul>
                    {this.state.products.map(p => <li key={p._id}>{p.name} - ${p.cost/100}</li>)}
                </ul>
            )
        }
        else {
            return (<p>Loading, please wait....</p>)
        }
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Our Shop</h1>
                {this.renderProducts()}
            </React.Fragment>
        )
    }
}