import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from "./landingpage.jsx"
import RegistrationPage from './register.jsx'
import Capture from './capture.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Scan from './scan.jsx';
import { Information } from './information.jsx';

const queryClient = new QueryClient();

function App() {

  // Create route
  const router = createBrowserRouter([
    {
      path:"/",
      element: <LandingPage/>
    },
    {
      path:"/register",
      element: <RegistrationPage/>
    },
    {
      path:"/capture",
      element: <Capture/>
    },
    {
      path:"/scan",
      element: <Scan/>
    },
    {
      path:"/profile",
      element: <Information/>
    }
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </>
  )
}

export default App
