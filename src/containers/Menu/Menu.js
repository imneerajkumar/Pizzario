import React, { Component } from 'react';
import axios from 'axios';

import Products from './Products';

class Menu extends Component {
    state = { 
        isLoading: true, 
        products: [] 
    };
    
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('/products')
        .then(productsResponse => {
            this.setState({ isLoading: false, products: productsResponse.data });
        })
        .catch(err => {
            this.setState({ isLoading: false, products: [] });
            this.props.onError('Loading products failed. Please try again later');
            console.log(err);
        });
    }

    render() {
        let content = <p>Loading products...</p>;

        if (!this.state.isLoading && this.state.products.length > 0) {
            content = <Products products={this.state.products} /> ;
        }
        if (!this.state.isLoading && this.state.products.length === 0) {
            content = <p className="Error-msgs">No products found. Try again later.</p>;
        }
        return <main>{content}</main>;
    }
}

export default Menu;