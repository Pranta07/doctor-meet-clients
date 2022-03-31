import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (





    <>
      <AuthProvider>
        {/* mdmahim shariar */}
        <Routes>
          <Route  path="/" element={<Home />} ></Route>
        </Routes>












        {/* md mahim shariar  */}

        {/* Suresh Pal Pranta */}
















        {/* Suresh Pal Pranta */}


        {/* Mostofa Reza */}
















        {/* Mostofa Reza */}

        {/* AKTARUZZAMAN RIDOY */}

















        {/* AKTARUZZAMAN RIDOY */}

        {/* Alamin */}

















         {/* Alamin */}

         {/* Mahadi */}

















         {/* Mahadi */}



      </AuthProvider>
    </>
  );
}

export default App;
