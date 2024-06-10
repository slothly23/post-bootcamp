import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'

function App() {
  const [pokemons, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.deno.dev/pokemon?limit=50")
    .then((res) => {
      // console.log(res.data);
      setPokemon(res.data)
    })
    .catch((err) => console.log(err))
  }, []);
  
  console.log(pokemons);

  return (
    <>
        {pokemons.map((item, idx) => (
          <Card key = {idx} item = {item}></Card>
          
        ))}
    </>
  )
}

export default App
