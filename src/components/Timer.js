import React, {Component} from 'react'
import soundfile from '../sound/Alarm_Clock.mp3'

class Timer extends Component {
    
    state = {
        isRunning: false, 
        hours: '',
        minutes: '',
        seconds: 0,
        totalMinutes: 0,
        totalSecondsCounter: 0,
        timeRemaining: 0,
        totalSeconds: 0,
        sound: new Audio(soundfile),
        status: 'In Progress',
        
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

    handleTimer = () => {
        this.setState({
            isRunning: !this.state.isRunning
        
        });
        
        
    }

    tick = () => {
        if (this.state.isRunning){
            this.setState(state => ({
                seconds: state.seconds + 1,
                totalSecondsCounter: state.totalSecondsCounter + 1,
                totalSeconds: this.props.totalTime * 60,
                timeRemaining: 100 / this.state.totalSeconds,
              }));
        }

      if (this.state.seconds === 60) {
          this.setState(state => ({
            minutes: state.minutes += 1,
            totalMinutes: state.totalMinutes + 1,
            seconds: state.seconds = 0
          }));
        }  
        
      if (this.state.minutes === 60) {

        this.setState(state => ({
            hours: state.hours += 1,
            totalHours: state.totalHours + 1,
            minutes: state.minutes = 0
            
          }));
      }

      if (Number(this.props.totalTime) === this.state.totalMinutes) {
       
         

        this.state.sound.play()

        this.setState(state => ({
          totalMinutes: 0,
          isRunning: false,
          status:'Task Complete'
        }));

        alert('This task is done');

        this.state.sound.pause()


        
     }


    }
  
    componentWillUnmount() {
      clearInterval(this.interval);

      
    }

    render() {

      return (
        
        <div 
        style = {{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          alignContent: 'stretch',
          flexWrap: 'wrap',
          }}
        
        >
            
            <h1>{this.props.time}</h1>
          <button onClick={this.handleTimer}>{this.state.isRunning? 'Stop Task': 'Start Task'}</button>
          <h4>Total Time Remaining: {this.props.totalTime - this.state.totalMinutes} Min</h4>
          
          <span>
          <h3>{this.state.status}</h3>
            <h4>{this.state.hours} hrs
            <span> </span>
            {this.state.minutes} min
            <span > </span>
            {this.state.seconds} sec</h4>
          </span>
          <span style = {{
            color: 'green',
            backgroundColor: 'green',
            maxHeight: '5px',
            // width: this.props.totalTime + 'vw',
            // borderLeft:  this.state.seconds  + 'px solid red',
            maxWidth: 100 - this.state.timeRemaining * this.state.totalSecondsCounter  + '%',
            }}>.</span>
        </div>


      );
    }
  }
  

export default Timer