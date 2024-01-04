import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css"
import Home from "./Home"
import Test from "../componets/Test"
import Css from "../componets/Css"
import Javascript from "../componets/Javascript"
import Acces from "../componets/Acces"


const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    },
  {
    path:"Test",
    element:<Test/>,
    },
         
  {
    path:"Css",
    element:<Css/>,
    },
  {
    path:"Javascript",
    element:<Javascript/>,
    },
         
  {
    path:"Acces",
    element:<Acces/>,
    },
         
          
  
      

])

function App() {
 


    return <RouterProvider router={router}/>
    
  
}

export default App
