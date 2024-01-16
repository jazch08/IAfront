import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedNum, setSelectedNum] = useState(1);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleNumUpload = (event) => {
    var c = document.getElementById('num').value
    console.log(c)
    console.log(event)
    setSelectedNum(c);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('datos', selectedFile);
    formData.append('cantidadPrediccion', selectedNum);
    api.post(baseURL+'/api/prediccion', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} /><br />
      <h3>Elija la cantidad de datos a predecir</h3>
      <input type='number' id='num' onChange={handleNumUpload} /><br />
      <Link to='/data'>
        <button onClick={handleUpload}>Upload</button>
      </Link>
    </div>
  );
};

export default UploadFile;