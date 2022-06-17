import {useState} from 'react'
import ClassComponent from './components/Class';
import FunctionalComponent from './components/Function';

function App(){
    const [view, setView] = useState();
    const [count, setCount] = useState(1);
    const [text, setTexto] = useState("Go to Class Component"); 


    const changeView = (num) => {
        if(num === 1) {
          setView(<ClassComponent />)
          setCount(prevState => prevState + 1)
          setTexto("Go to Funtion Component")
        } else if( num === 2) {
          setView(<FunctionalComponent />)
          setCount(prevState => prevState - 1)
          setTexto("Go to Class Component")
        }
      }


    return(
        <div>
            {view}
            <div>
            <button onClick={()=> changeView(count)}>{text}</button>
            </div>
        </div>
        
    )
}
export default App;

