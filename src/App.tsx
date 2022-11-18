import React from "react";
import "./App.css";
import { Route, Routes,Navigate } from "react-router-dom";
import AllList from "./Components/AllList";
import Details from "./Components/Details";
import Error from "./Components/Error";
import { AppProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route element={<AllList />} path="/" />
          <Route element={<Navigate to="/"/>} path="/pokemon" />
          <Route element={<Details />} path="/pokemon/:id" />
          <Route element={<Error/>} path='*'/>
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
