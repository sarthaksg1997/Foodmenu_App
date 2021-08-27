import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="btn-group">
                {props.uniqueList.map((item)=>{
                    
              return <button className="btn-group__item  " onClick={()=>props.filter(item)}>{item}</button>
                })}
                
            </div>
        </nav>
    )
}

export default Navbar
