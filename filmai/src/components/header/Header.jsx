import React, {Component} from 'react'
import logo from '../logo.jpg'


class Header extends Component{
    render(){
        return(
                <div className="row">
                    <div className="col">
                        <img src={logo} />
                    </div>
                </div>
        );
    }
}

export default Header;