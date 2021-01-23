import React, { Component } from "react";

class carousel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel" >
          <div className="carousel-inner">
           {

               this.props.gambar.map((gambar, index) =>{
                   let statusCss ='';
                   if (index === 0){
                       statusCss = "carousel-item-active"
                   }else{
                    statusCss = "carousel-item"
                   }
                   return <div className={statusCss} key={index}> <img src={gambar} className="d-block w-100" alt="..."/> </div>
               })
           }
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default carousel;