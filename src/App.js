import './App.css';
import LandingPage from './views/LandingPage';

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import TrendingResults from './views/TrendingResults';


function App() {
  const router = createBrowserRouter([
    {
      path: "/trending",
      element: <TrendingResults/>,
    },
    {
      path: "/",
      element: <LandingPage/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
