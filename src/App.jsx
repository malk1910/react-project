import Home from './Home'
import Nav from './Nav'
import About from './About'
import Layout from './Layout'
import AllProducts from './AllProducts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'',
    element: <Layout />,
    children:[
      {path : "" , element: <Home />},
      {path : "Home" , element: <Home />},
      {path : "Products" , element: <AllProducts />},
      {path : "Layout" , element: <Layout />},
      {path : "About" , element: <About />},
      {path : "Nav" , element: <Nav />},
      // {
      //   path:'Nav',
      //   element:<Nav />,
      //   children:[
      //     {path : "" , element: <Home />},
      //     {path : "Nav" , element: <Home />},
      //     {path : "Nav" , element: <About />},
      //     {path : "Nav" , element: <Products />}

          
      //   ]
      // },
      {path : "*" , element: <h1 className='text-center text-danger'>Not Found 404</h1>}

    ]

  }



])
export default function App(){
  
  return (
    <>
  {/* <Home /> */}
  {/* <Parent /> */}
  {/* <Parenttwo />
  <AllProducts /> */}

  <RouterProvider router={router} />
    </>
  )
}