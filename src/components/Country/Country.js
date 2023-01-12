import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props)
    const {area, population, flags, name } =props.country
    return (
        <div className='country'>
            <h5>Country Name: {name.common}</h5>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;