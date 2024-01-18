import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const UploadFile = () => {

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedNum, setSelectedNum] = useState(1);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNumUpload = (event) => {
    const inputValue = event.target.value;
    const minValue = 1;
    const maxValue = 6;

    if(inputValue < minValue) {
      event.target.value = minValue;
    } else if(inputValue > maxValue) {
      event.target.value = maxValue;
    } else {
      console.log(inputValue);
      setSelectedNum(inputValue);
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('datos', selectedFile);
    formData.append('cantidadPrediccion', selectedNum);
    api.post('/api/prediccion/', formData)
      .then((response) => {
        console.log(response.data);
        alert("Carga exitosa");

        navigate('/data', { state: { data: response.data } });
        
      })
      .catch((error) => {
        alert(error.response.data.msgError);
        window.location.reload();
        console.log(error.response.data.msgError);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} /><br />
      <h3>Elija la cantidad de datos a predecir</h3>
      <input type='number' id='num' onChange={handleNumUpload} min={1} max={6}/><br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFile;