import React, { Component } from 'react';

class card extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.cardImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <a href="#" className="btn btn-primary" onclick = "">Go Detail</a>
                </div>
            </div>
        );
    }
}
export default card;

