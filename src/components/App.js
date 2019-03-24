import React, {Component} from 'react';
import FeatureCards from './FeatureCards.js'
import Header from './Header.js'
import CustomCards from './CustomCards'
import AddCardForm from './AddCardForm'


class App extends Component {
  state = {

    cards: [
      {
        title: 'Get Your Run On',
        desc: 'Run outside for 4 miles within 30 minutes',
        time: 30,
        status: '',
        id:1
      },
      {
        title: '100 Push Ups a Day',
        desc: 'Perform 100 push ups a day',
        time: 2,
        status: '',
        id:2
      },
      {
        title: 'Things for your Brain',
        desc: 'Read a book for an hour',
        time: 30,
        status: '',
        id:3
      }
    ],

    customCards: [
      
    ]
  };
 // Custom Task Card Id
  prevCardId = 0;

  // Add custom task cards
  handleAddCard = ( title, time) => {
      this.setState({
        customCards: [
          ...this.state.customCards,
          {
            title,
            time,
            id: this.prevCardId += 1
          }
        ]
      });
  }

  //Remove custom task cards
  handleRemoveCard = (id) => {
    this.setState( prevState => {
      return {
        customCards: prevState.customCards.filter(c => c.id !== id)
      };
    });
  }

  render() {
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let day = days[date.getDay()];


      
  
    return (
      <div className="main">
        
        <Header 
          title="Focus Cards" 
          totalTask={this.state.customCards.length + this.state.cards.length} 
        />
        <div id="cardsSection">
        
        <h1>{day} Focus Cards</h1>
        {this.state.cards.map( card  =>
            <FeatureCards 
            title={card.title}
            desc={card.desc}
            time ={card.time}
            status ={card.status}
            key={card.id}
          />
          
        )}
    
        <h1>Add Focus Cards</h1>
        <p>What do you want to focus on today</p>

        {this.state.customCards.map (
          customCards => 
          <CustomCards
          title={customCards.title}
          time={customCards.time}
          id = {customCards.id}
          key={customCards.id} 
          removeCards={this.handleRemoveCard}
        />
        )}

        <AddCardForm
        addCards={this.handleAddCard}
        />
        </div>
      </div>
    );
  }
}

export default App;
