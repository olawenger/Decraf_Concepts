import { 
  Route, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements  
} from "react-router-dom";

import RootLayout from "./layout/rootlayout/RootLayout";
import HomePage from "./pages/home/HomePage";
import ServicePage from "./pages/service/ServicePage"; 
import ContactUsPage from "./pages/contact/ContactUsPage";
import AboutPage from "./pages/about/AboutPage";
import ErrorPage from "./pages/404/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />  
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Route>
      
      <Route path="*" element={<ErrorPage />} /> 
    </>
  )
);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;