import React from 'react' 
import sunny from '../sunny.svg'
import cold from '../cold.svg'

class Day extends React.Component {
    render() {
        console.log(this.props.time)

    const core = this.props.weather
    const isCold = function(){
        if(core.temp_min >= 20){
            return <img src={sunny} alt="sunny" width="80px"/>
        }
        else {
           return <img src={cold} alt="cold" width="80px"/>
        }
    }
    return (
        
    <div className = "cards">
        {/* <p>{this.props.time}</p> */}
        <p>{isCold()}</p>
        <p>Max: {core.temp_max}</p>
        <p>Min: {core.temp_min}</p>
        <p>Humidity: {core.humidity}%</p> 
        <p>Atmospheric Pressure {core.pressure}</p>
    
    </div>
    )
   }
}
   
   export default Day;