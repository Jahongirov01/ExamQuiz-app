import { NavLink } from 'react-router-dom'

const Home = () => {
   const handleDark=()=>{
      let darkEl=document.getElementById('container')
      darkEl.classList.toggle('dark-mode');
    }
    
  return (


<div className="">
      <div className="container " id='container'>
      <div className="div">
         <img src="./images/Vector (1).png" alt="" className='img' />
         <img src="./images/Vector.svg" alt="" className='im' />
         <button className='btn' onClick={handleDark}>
         </button>
         <button className='btn3'>
         </button>
      </div>
     <h1 className="quiz"> Welcome to the <br />
      
      <span>Frontend Quiz!</span>
     <p className="Pick">Pick a subject to get started.</p>
     

        <NavLink to={"/Test"} >
        <div className="Card1">
              <img src="./images/card-1.svg" alt="card" className="images" />
             <h1 className="html">HTML</h1>
     </div>
        </NavLink>
        <NavLink to={"/Css"} >
     <div className="Card2">
              <img src="./images/card-2.svg" alt="card" className="images" />
             <h1 className="html">CSS</h1>
     </div>

        </NavLink>
        <NavLink to={"/Javascript"} >
     <div className="Card3">
              <img src="./images/card-3.svg" alt="card" className="images" />
             <h1 className="html">Javascript</h1>
     </div>
     </NavLink>
     <NavLink to={"/Acces"} >
     <div className="Card4">
              <img src="./images/card-4.svg" alt="card" className="images" />
             <h1 className="html">Accessibility</h1>
     </div>
     </NavLink>
     </h1>
     </div> 
     </div>
  
    
  )
}

export default Home