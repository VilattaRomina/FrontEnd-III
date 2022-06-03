import React, {Component} from 'react'
import {Button, Container, Counter, ContainerButton, ContainerCounter} from './Styles.js'
import './App.css';


export default class App extends Component{
  
 state = {
   count : 0
 }


 add = () =>{
  this.setState((prevState)=>({count: prevState.count +1 }))
  }
 

  sub= () =>{
    this.setState((prevState)=>({count: prevState.count >0 ? prevState.count -1 : prevState.count }))
   }


render(){
  return(
<Container>
        <ContainerCounter>
            <Counter>{this.state.count}</Counter>
        </ContainerCounter>
        <ContainerButton>
              <Button onClick={()=> this.add()}>+</Button>
              <Button onClick={()=>this.sub()}>-</Button>
        </ContainerButton>
</Container>
   
      
   
  )
}

}


