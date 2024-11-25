
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import Layoutone from './Components/Layouts/Layoutone'
import Home from './Components/Pages/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const myRoute= createBrowserRouter(
    createRoutesFromElements(
    
      <Router>

     <Route path='/' element={<Layoutone/>} >
      <Route index element={<Home/>} />
      
     </Route>

      </Router>


     
    )
  )

  return (
    <>
     <ToastContainer />
     <RouterProvider router={myRoute}/>
      
    </>
  )
}

export default App
