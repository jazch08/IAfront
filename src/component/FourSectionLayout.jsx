import { React,  useEffect, useState, useContext } from "react";
const anio= 2023;
import api from "../services/api";
import { Link } from 'react-router-dom';

const FourSectionLayout = () => {
  const[travelList, setTravelList] = useState([]);

  useEffect(() => {
    async function getTravelList(){
        const { data } = await api.get("/api/prediccion");
        setTravelList(data);
    }
    getTravelList();
},[]);

  return (
    travelList.map((el)=>(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centra los elementos horizontalmente
        justifyContent: 'center', // Centra los elementos verticalmente
        minHeight: '100vh', // Ajusta la altura según tus necesidades
      }}
    >
      {/* Primera fila con tres columnas */}
      <div
        style={{
          display: 'flex',
          width: '80%', // Ancho del contenedor principal
          marginBottom: '20px',
        }}
      >
        {/* Primera columna */}
        <div
          style={{
            flex: '1',
            marginRight: '5px',
            backgroundColor: '#f1f1f1',
            padding: '20px',
          }}
        >
          
          <h2>Anio{anio}</h2>
        </div>

        {/* Segunda columna */}
        <div
          style={{
            flex: '1',
            marginRight: '5px',
            backgroundColor: '#c8e6c9',
            padding: '20px',
          }}
        >
          <p>Columna 2</p>
          el.prediccion
        </div>

        {/* Tercera columna que ocupa el 50% */}
        <div
          style={{
            flex: '2',
            backgroundColor: '#e3f2fd',
            padding: '20px',
          }}
        >
          <p>Columna 3 (50%)</p>
          <img src={el.photo}/>
        </div>
      </div>

      {/* Segunda fila con un botón */}
      <div>
        <Link to='/'>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#f8bbd0',
          }}
        >
          Inicio
        </button>
        </Link>
      </div>
    </div>
    ))
  );
};

export default FourSectionLayout;
