import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';

const FileUploader = ({ onFileUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [numberOfMonths, setNumberOfMonths] = useState('');
  const [showInput, setShowInput] = useState(false); // Nuevo estado

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
    setShowInput(true); // Mostrar el campo de entrada después de cargar archivos
    // No necesitas llamar a onFileUpload aquí, ya que lo harás en handleNextClick
  }, []);

  const handleNextClick = () => {
    // Verificar que el número de meses esté entre 1 y 12
    if (Number(numberOfMonths) >= 1 && Number(numberOfMonths) <= 12) {
      console.log('Número de meses:', numberOfMonths);
      console.log('Archivos subidos:', uploadedFiles);

      // Navegar a la siguiente ruta (por ejemplo, '/siguiente')
    } else {
      <Link to='/'>
      </Link>
      alert('Ingrese un número válido de meses (entre 1 y 12).');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos</p>
      </div>
      {uploadedFiles.length > 0 && showInput && (
        <div>
          <h2>Archivos Cargados:</h2>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
          <label>
            Número de Meses a predecir:<br></br>
            <input
              type="number"
              value={numberOfMonths}
              onChange={(e) => setNumberOfMonths(e.target.value)}
              min="1"
              max="12"
            />
          </label><br />
          <Link to="/data" >
            <button onClick={handleNextClick}>Predecir</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #ddd',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUploader;
