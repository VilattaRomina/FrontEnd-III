const Card = ({tipo}) => {
    return(
        <div className="mainCard">
            {tipo.map( item =>
                <div className="card"> 
                   <h2>{item.pokemonName}</h2> 
                   <img  src= {item.avatar} alt={item.pokemonName}/>
                </div>               
          ) }
        </div>
    )
}


export default Card;