import React from 'react'
import {Link} from 'react-router-dom';
function Navbar(props) {
  return (
    <>
          <nav className="navbar navbar-expand-lg " style={
               {
                    "color":"black",
                    "backgroundColor":"#8860D0"                    
                    }}>
          <div className="container-fluid" style={{"color":"black"}}>
          <Link className="navbar-brand" to="/home" style={{"color":"black"}} ><strong>IIT Delhi</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home" style={{"color":"black"}}>Home</Link>
               </li>
               {props.categoriesList.map((element)=>{
                  return <li className="nav-item" key={element}>
                    <Link className="nav-link" to={element} style={{"color":"black"}}>{element}</Link>
               </li>
                 
               })}
               </ul>
              
          </div>
          </div>
          </nav>
    </>
  )
}

export default Navbar