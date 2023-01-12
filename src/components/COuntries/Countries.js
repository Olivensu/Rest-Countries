import React, {useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [Countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then(res => res.json())
    .then(data =>setCountries(data));
    }, [])
    console.log(Countries);
    return (
        <div >
            <h1>Here is the All country list...</h1>
            <div className='countries'>
            {
                Countries.map((country, index) => <Country country={country} index={index}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;