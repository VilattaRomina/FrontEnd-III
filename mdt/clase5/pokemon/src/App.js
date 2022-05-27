import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
//{pokemonData} de esta forma desestructuramos para que sea mas facil acceder a el
import { pokemonData } from './data/PokemonData';
import Fire from './components/Fire';
import Water from './components/Water';
import Rock from './components/Rock';
import Electric from './components/Electric';




function App() {
  //estado del componente, forma en como muestro los datos
  const[state, setState] = useState();

  const handleCard = (valor) => {
    if(valor === 1){
          setState(<Rock
          tipo = {pokemonData.rock}
            /> )     
    } else if(valor === 2){
          setState(<Water
          tipo = {pokemonData.water}
            /> )     
    } else if(valor === 3){
          setState(<Fire
          tipo = {pokemonData.fire}
            /> )     
    } else if(valor === 4){
          setState(<Electric
          tipo = {pokemonData.electric}
            /> )     
    }
  }


  return (
    <div className='App'>
      <Navbar
      //cuando cambie estado 
          ChangeState = {handleCard}
      />
      {
        state
      }

    </div>
  
  )
}

export default App;
