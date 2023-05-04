import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx'
import Chat from './components/Chat.jsx'
import Art from './components/Art.jsx'
import About from './components/about.jsx'
import Book from './components/Book.jsx'

function App() {

  const router = createBrowserRouter([
      
            {
               path: "/",
               element: <Home/>,
            },
            {
               path: "/chat",
               element: <Chat/>,
            },
            {
               path: "/art",
               element: <Art/>,
            },
            {
               path: "/book",
               element: <Book/>,
            },
            {
               path: "/about",
               element: <About/>,
            },
         ]
    );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
