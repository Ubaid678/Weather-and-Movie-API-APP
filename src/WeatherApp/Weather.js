import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCloudSun, faWind,faDropletSlash, faCloudRain} from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {

    const [name,setName] = useState("");
    const [data,setData] = useState({
        city: '',
        temperature: 0,
        humidity: 0,
        speed: 0,
        
    })

    const handleClick = () => 
    {   
        if (name !== "")
        {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=46bd552f2dedc9e59a8a2df6b4538a8b&units=metric`;
        axios.get(apiUrl)
        .then(res => 
            setData(
                {...data, city: res.data.name, temperature: res.data.main.temp, humidity: res.data.main.humidity, speed: res.data.wind.speed}
                ))
        .catch((err) => console.log(err))
        }
    }

    return ( 
        <div className="weather">
            <div className="search">
                <input type="text" placeholder="Enter a City Name" onChange={x => setName(x.target.value)} />
                
                <button onClick={handleClick} > <FontAwesomeIcon icon={faMagnifyingGlass} flip size="sm" className='icon' /></button>
            </div>
            
            <div className="w-info">
            <FontAwesomeIcon icon={faCloudSun} beat size="2xl" style={{color: "#fbff00",}} className='weather-icon' />
                <h1>{data.temperature}°c</h1>
                <h2>{data.city}</h2>
            </div>
            <div className="details">
                <div className="col">
                <FontAwesomeIcon icon={faDropletSlash} size="2xl" style={{color: "#005eff",}} className='weather-icon'  />
                    <div className="humidity" >
                        <p>{data.humidity}</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col">
                <FontAwesomeIcon icon={faWind} size="2xl" style={{color: "#005eff",}} className='weather-icon'  />
                    <div className="wind">
                        <p>{data.speed}</p>
                        <p>Wind</p>
                    </div>
                </div> 
            </div>
        </div>
     );
}
 
export default Weather;