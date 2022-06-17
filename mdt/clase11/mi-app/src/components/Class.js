import { Component } from 'react';
import Card from './Card';

class ClassComponent extends Component{

  constructor(){
    super();
    this.state = {
      data: {}, 
      id:1}
  }

  request =async() =>{
    const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)

    const result = await response.json();
    this.setState({data: result});
  }

  componentDidMount() {
    this.request();
  }

  changeId = (args) => {
        if (args === "Anterior"){
          this.setState( prevState => ({id: prevState.id - 1}))
        } else if (args === "Siguiente"){
          this.setState( prevState => ({id: prevState.id + 1}))
        }
    }

    //aunque no usamos las props hay que invocarlas, las usamos cuando el componente sea el hijo, el que cambie
    componentDidUpdate(PrevProps, PrevState){
      if(PrevState.id !== this.state.id){
        this.request();
      }
    }


  render(){
    console.log(this.state.id);
    return(
        <div>
        
         <Card name={this.state.data.name} img={this.state.data.image} changeId={this.changeId} text="Componente de clase"/>


        </div>
    );


  }
  
}

export default ClassComponent;
