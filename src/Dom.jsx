import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import How from "./How"
import Pick from "./Pick"
import Asos from "./Asos"

const router=createBrowserRouter([ //RouterProvider uchun router
    {
        path: '/',
        element:<App/>
    },
    {
        path:'/how',
        element:<How/>
    },
    {
        path:'/pick',
        element:<Pick/>
    },
    {
        path:'/oyn',
        element:<Asos/>
    }
])

function Dom() {
  return (
    <RouterProvider router={router}></RouterProvider>// React-router-dom elemannti
  )
}

export default Dom