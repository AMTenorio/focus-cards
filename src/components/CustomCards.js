import React from 'react'
import Timer from './Timer.js'

const CustomCards = (props) =>{

    let totalTime = props.time;

    return(
        
        <div className = "card">
                <div>
                    <button className="remove-card" onClick={() => props.removeCards(props.id)}>✖ Remove</button>
                    <span>
                        <h2>{props.title}</h2> 
                        <p>{props.time} minutes</p>
                    </span>
                </div>
                <Timer
                    totalTime = {totalTime}
                />
        </div>

        

    )
};



export default CustomCards