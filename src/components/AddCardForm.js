import React, {Component} from 'react'

class AddCardForm extends Component {

        state = {
            title: '',
            time:''
        
        }

        handleValueChange = (e) => {
            this.setState({ 
                [e.target.name]: e.target.value 
            }); 
        }

        
        handleSubmit = (e) => {
          e.preventDefault();
          if (this.state.title === '' || this.state.time === ''){
          alert('Please enter something')
          } else {

         
              this.props.addCards(this.state.title, this.state.time)
          }
        }



    render() {
        
    return(
      <div id="addForm">

      <form onSubmit={this.handleSubmit}>
        <input 
          type = 'text'
          value = {this.state.title}
          name = 'title'
          onChange={this.handleValueChange}
          placeholder = 'Enter task card title'
        />
        <input 
          type = 'number'
          min = '1'
          value ={this.state.time} 
          name = 'time'
          onChange={this.handleValueChange}
          placeholder = 'Enter focus minutes'
        />
        <input 
          type = 'submit'
          value = 'Add Card'
        />
      </form>

      
          
      </div>
    );
    }
  }

export default AddCardForm