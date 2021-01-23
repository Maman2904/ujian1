import React, { Component } from 'react'
import Cardtwo from './cardtwo'

export class product extends Component {
    state = {
        jumlah : 0
    }

    handlerChange =(newvalue)=>{
        this.setState({
            jumlah : newvalue
        })
    }


    render() {
        return (
            <div>
                <p>Jumlah product {this.state.jumlah} </p>
                <Cardtwo ubahCounter = {(value)=> this.handlerChange(value)} />
            </div>
        )
    }
}



export default product;
