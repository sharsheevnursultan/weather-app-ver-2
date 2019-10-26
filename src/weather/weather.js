import React from "react";
import '../weather/weather.css'

const Weather = (props) => (
    <div>
        <div>
            {props.city && props.country &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Город:
                </span>
                <span>{props.city}, {props.country}</span>
            </div>}

            {props.temperature &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Температура:
                </span>
                <span>{props.temperature} °C</span>
            </div>}
            {props.humidity &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Влажность:
                </span>
                <span>{props.humidity} %</span>
            </div>}
            {props.speed &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Ветер:
                </span>
                <span>{props.speed} м/с</span>
            </div>}
            {props.sunrise &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                     Восход:
                </span>
                <span>{props.sunrise}</span></div>}
            {props.sunset &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Закат:
                </span>
                <span>{props.sunset}</span></div>}
            {props.notFoundCode &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                </span>
                <span>{props.notFoundCode}</span>
            </div>}
            {props.notFoundMessage &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>

                </span>
                <span>{props.notFoundMessage}</span>
            </div>}
            {props.error &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    <div>{props.error}</div>
                </span>
            </div>}
        </div>
        <div>
            {props.weatherIcon &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>

                </span>
                <span>
                    <img
                        src={'https://openweathermap.org/img/w/' + props.weatherIcon + '.png'}
                        alt={props.description}/>
                </span>
            </div>}
        </div>
    </div>
);

export default Weather;
