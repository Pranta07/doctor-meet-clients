import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Registation from "./components/security/Registation/Registation";
import Login from "./components/security/Login/Login";

function App() {
  return (





    <>
      <AuthProvider>
        {/* mdmahim shariar */}
        <Routes>




          
          <Route  path="/" element={<Home />} ></Route>
          <Route  path="/signUp" element={<Registation/>} ></Route>
          <Route  path="/login" element={<Login/>} ></Route>
        










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


         </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
