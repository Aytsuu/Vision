import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from "./landingpage.jsx"
// import RegistrationPage from './register.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <LandingPage/>
    },
    // {
    //   path:"/register",
    //   element: <RegistrationPage/>
    // }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
