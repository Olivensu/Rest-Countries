import React, {useState, useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [Countries, setCountries] = useState();
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then(res => res.json())
    .then(data =>setCountries(data));
    }, [])
    console.log(Countries);
    return (
        <div>
            <h1>Hi I am the best</h1>
            {
                Countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;