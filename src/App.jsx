import React from 'react'; 
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import FileUploader from './component/FileUploader';
import './App.css';
import Load from './paginas/Load';
import Home from './paginas/Home'
import Routing from './routes';
const App = () => {
  const handleFileUpload = (files) => {
    // Lógica para manejar los archivos subidos
    console.log('Archivos subidos:', files);
  };

  return (
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  );
};

export default App;
