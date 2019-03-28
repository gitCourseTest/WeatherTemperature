import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div>
            <WeatherIcons name="day-sunny" size="2x"></WeatherIcons>
            <span>{`${temperature} °C`}</span> 
        </div>
    );
}


export default WeatherTemperature;