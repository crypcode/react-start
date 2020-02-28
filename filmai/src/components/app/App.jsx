import React, {Component} from 'react';
import './app.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import Search from '../search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <Search/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}


export default App;