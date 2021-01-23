import React, { Component } from "react";
import Data from '../Data.json'

class essay extends Component {
  render() {
    return (
      <div>
        
          {Data.map((key, index) =>{
            if(index === 2)
            return <div>
            <p>3. {key.soal}</p>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{height: 100, width :500}}></textarea>
            </div>
            </div> 
          })}
        
          
      </div>
    );
  }
}
export default essay;
