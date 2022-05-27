const Navbar = ({ChangeState}) => {
    return(
        <nav>
            <button onClick={()=>ChangeState(1)}>Fire</button>
            <button onClick={()=>ChangeState(2)}>Water</button>
            <button onClick={()=>ChangeState(3)}>Rock</button>
            <button onClick={()=>ChangeState(4)}>Electric</button>  
    
        </nav>
        
    )
}

export default Navbar;