import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import Quiz from "./pages/quiz/Quiz";
import Todo from './pages/todo/Todo';
import Index from './pages/index/Index';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CookiesProvider } from "react-cookie";
import { Context } from './components/Context';
import Header from './components/header/Header';
import Post from './pages/post/Post';
import Register from './pages/register/Register';


function App() {
  const [token, setToken] = useState(null)
  function resizeHandler() {
    const isMobileGet = window.screen.availWidth < 481 ? true : false;
    setIsMobile(isMobileGet);
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(e => {
    resizeHandler()
    window.addEventListener("resize", resizeHandler)
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  })
  return (
    <CookiesProvider>
      <Context.Provider value={{
        isMobile,
        setIsMobile,
        token,
        setToken
      }}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/" element={<Index />} />
              <Route path="/todo" element={<Todo />} />
              <Route path='/post/:id' element={<Post />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Context.Provider>
    </CookiesProvider>
  );
}

export default App;
