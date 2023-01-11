import './App.css';
import Countries from './components/COuntries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// const LoadCountries = (props)=>{
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all').then(res => res.json())
//     .then(data =>setCountries(data));
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Countries of the World!!!!</h1>
//       {
//         countries.map(country => <DisplayCountry name={country.name.common} population ={country.population} flag={country.flags.png}></DisplayCountry>)
//       }
//     </div>
//   )
// }

// const DisplayCountry = (data) =>{
//   return (
//     <div>
//       <h2>Name: {data.name}</h2>
//       <p>Population: {data.population}</p>
//       <img src={data.flag} alt="" />
//     </div>
//   )
// }

export default App;
