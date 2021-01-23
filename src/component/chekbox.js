import React, { Component } from "react";
import Data from '../Data.json'

class chekbox extends Component {
  render() {
    return (
      <div>
        {Data.map((key, index) =>{
          if (index === 1)
          return <div>
          <p>2. {key.soal}</p>
          {key.option.map((key) =>{
              return  <div className="form-check">
              <input type="checkbox"
                className="form-check-input"
                value=""
                id="flexCheckChecked"/>
              <label className="form-check-label" for="flexCheckChecked">
                {key}
              </label>
            </div>
            })}
        
       
        </div>
        })}
        
      </div>
    );
  }
}
export default chekbox;