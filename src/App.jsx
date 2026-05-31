import Home from './Home'
import Nav from './Nav'
import About from './About'
import Layout from './Layout'
import AllProducts from './AllProducts'
import Projects from './Projects'
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
      {
        path:"Projects",
        element:<Projects />,
        children: [
          {path : "" , element: <h2>Project1</h2>},
          {path : "Project1" , element: <h2>Project 1</h2>},
          {path : "Project2" , element: <h2>Project 2</h2>},
          {path : "Project3" , element: <h2>Project 3</h2>}
        ]
      },
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