import React, { Component } from 'react'
import Data from '../Data.json'

class radio extends Component {
    render() {
        return (
            <div>
                {Data.map((key, index) =>{
                    if (index === 0) 
                    return  <div>
                    <p>1. {key.soal}</p>
                    <table className="form-check">
                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type={key.type} name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{key.a}</label>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{key.b}</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{key.c}</label>
                            </div>
                        </td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{key.d}</label>
                            </div>
                        </td>
                    </tr>
                </table>
                </div>
                
                        
                })}
               
            </div>
        )
    }
}
export default radio;