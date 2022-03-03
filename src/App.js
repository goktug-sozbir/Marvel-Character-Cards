import './App.css';
import Header from './components/Header'
import CharacterTable from './components/characterTable'
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Search from './components/Search'

  const hash = "cb9e3cd2e486e14e97a155f47e2526e6";

function App() {
  const[items,setItems] = useState([]);
  const[isLoading,setLoading] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const[query,setQuery] = useState('')

  useEffect(()=> {

    const fetch = async()=>{

      if (query==='') {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f883e765b89c1a1c2888a84c21e5ebc0&hash=${hash}`)
      console.log(result.data.data.results);
      setItems(result.data.data.results)
      setLoading(false)
     } else {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=f883e765b89c1a1c2888a84c21e5ebc0&hash=${hash}`)
      console.log(result.data.data.results);
      setItems(result.data.data.results)
      setLoading(false)
     }
  }
    fetch()
  },[query])

  return (

    <div className="container">

        <Header/>
        <Search serach={(q)=>setQuery(q)}></Search>
        <CharacterTable items={items} isLoading={isLoading}/>

    </div>

  );
}

export default App;
