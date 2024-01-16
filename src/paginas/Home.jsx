import React from "react";
import FileUploader from "../component/FileUploader";
function Home(){
    const handleFileUpload = (files) => {
        // Lógica para manejar los archivos subidos
        console.log('Archivos subidos:', files);
      };
    return(
        <div>
            <img  />
            <h1></h1>
            <h3>¡Bienvenido!</h3>
            <h3>Predictor de tonaladas de exportacion de pescado</h3>
            <h3>Ingrese su archivo en formato csv</h3>
            <FileUploader onFileUpload={handleFileUpload} />
        </div>)
}
export default Home;