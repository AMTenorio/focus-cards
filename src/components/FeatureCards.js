import React from 'react';
import Timer from './Timer.js'


const FeatureCards = (props) => {
 
        let totalTime = props.time;

        const style = {
            backgroundImage: 'url(' + props.image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };   
        
        return (
            
                <div className = "card" style={style}>   
                <span className="cardInfo">
                    <h2>{props.title}</h2> 
                    <p>{props.desc}</p>
                    <p>{props.time.toString()} min</p>
                    <h3>{props.taskStatus}</h3>
                    </span>

                    <Timer
                        totalTime = {totalTime}
                    />
                </div>
                
    
        )  
};

export default FeatureCards