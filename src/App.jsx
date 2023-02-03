import './App.css'
import Root from './Pages/Root'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BSSE , {loader as bsseCoursesLoader} from './Pages/BSSE'
import BSCS , {loader as bscsCoursesLoader} from './Pages/BSCS'
import ErrorPage from './Pages/ErrorPage'


function App() {

  const routes = createBrowserRouter([
    {path: '/' , 
    element : <Root /> ,
    errorElement :  <ErrorPage />,
    children : [
        {path : '/' , element : <Home />},
        {path : '/bsse' , element : <BSSE /> , loader : bsseCoursesLoader},
        {path : '/bscs' , element: <BSCS /> , loader : bscsCoursesLoader}
    ]
  }
  ])

  return  <RouterProvider router={routes} />
}

export default App
