import React, {Component} from 'react';

function Main(props){
    console.log(props.data)
    return (
        <div>
            <p>{props.data}</p>
        </div>
    );
}




export default Main;

