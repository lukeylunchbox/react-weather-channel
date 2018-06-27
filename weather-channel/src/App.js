import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Axios from 'axios'
import sun from './sun.png';
import Day from './components/Day'
import './App.css'

require('dotenv').config()

class App extends Component {


  state = {
    weather : [{}],
    time: [{} ]
}

  componentDidMount(){
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?id=2158177&APPID=${process.env.REACT_APP_APIKEY}&units=metric`
    Axios.get(weatherURL)
    .then((response) => {
      console.log(response)
      const main = response.data.list
      this.setState({
        weather: main.map((day) => {
        return day.main
        }),
        time: main.map((time) => {
          return time.dt_txt  
      })
    })
    })
  }

  render() {

    const weather = this.state.weather
    const time = this.state.time
    const days = this.state.weather.map(day => {
        console.log(day)
        return <Day weather={day} time={time}/>
        })
  
    return (
      
    //  <BrowserRouter> 
      // <Switch>
          <div className="App">
            <header className="App-header">
              <img src={sun} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to the Weather Channel</h1>
            </header>
              <br/>
            <div className="card">
            <h1>Melbourne Forecast</h1>
            {/* <Route path="/" component={Day}/> */}
           {days}
            </div>
          </div>
        // </Switch>
      // </BrowserRouter> 

    )
  }
}

export default App;
