import React from 'react';



const Header = (props) => {
  let greetings = ""
  
  let date = new Date();
  let hours = date.getHours()

    if (hours < 12)
        greetings = "Good Morning"
    else if (hours > 11 && hours < 18)
        greetings = "Good Afternoon"
    else 
        greetings = "Good Evening"
      
  console.log(hours)
    return (
      <header>
        <div id="headerItem">
        <h2>{ props.title }</h2>
        <span><p>Number of focus cards: {props.totalTask}</p></span>
        </div>
        <div id="headerGreeting">
        <span>
          <h5>{greetings}</h5>
        </span>
        </div>
      </header>
    );
  }

export default Header