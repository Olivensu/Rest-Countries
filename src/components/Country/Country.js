import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props)
    // const {area, population, flag } =props.country
    return (
        <div className='country'>
            <h1>Sam is best</h1>
            {/* <h3>Country Name: {area}</h3>
            <p>Population: {population}</p>
            <img src={flag} alt="" /> */}
        </div>
    );
};

export default Country;