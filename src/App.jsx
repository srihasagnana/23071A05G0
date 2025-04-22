import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'aboutpage',
          element: <AboutPage />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
