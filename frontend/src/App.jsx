import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from "./landingpage.jsx"
import RegistrationPage from './register.jsx'
import Capture from './capture.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Scan from './scan.jsx';

const queryClient = new QueryClient();

function App() {

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
      path:"/scan",
      element: <Scan/>
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
