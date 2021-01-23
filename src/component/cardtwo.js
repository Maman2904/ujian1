import React, { Component } from "react";


class cardtwo extends Component {
  state = {
    jumlah: 0
  };

  handleCounterUbah = (newvalue)=>{
      this.props.ubahCounter(newvalue);
  }

  handlePlus = () => {
    this.setState({
      jumlah: this.state.jumlah + 1
    }, ()=> this.handleCounterUbah(this.state.jumlah));

  };

  handleMin = () => {
    if(this.state.jumlah > 0){
        this.setState ({
      jumlah: this.state.jumlah - 1
    }, ()=> this.handleCounterUbah(this.state.jumlah));
    }
  };

  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary" onClick={this.handlePlus}>
              +
            </a>
            <p className="card-text">====</p>
            <a href="#" className="btn btn-primary" onClick={this.handleMin}>
              -
            </a>
          </div>
          <div className="card-footer text-muted">
            {this.state.jumlah} days ago
          </div>
        </div>
      </div>
    );
  }
}

export default cardtwo;
