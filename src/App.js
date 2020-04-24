import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";


class App extends Component {
    constructor(props) {
      super(props)
    }


    render(){

       return (
            <React.Fragment>
                    <Navbar/>
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/product" component={Product} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Modal />
                
            </React.Fragment>
        );
    }
       
}



export default App;
