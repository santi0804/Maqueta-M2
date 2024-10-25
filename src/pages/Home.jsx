import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Enrutador } from '../routes/Enrutador';

let router = createBrowserRouter(enrutadorApp);


const Home = () => {
  
  return <RouterProvider router={router} />;
};

export default Home;
