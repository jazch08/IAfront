import React from 'react';

const ListPredictions = ({ datos }) => {
  return (
    <ul style={{ listStyleType: 'decimal', padding: 0 }}>
      {datos.map((item, index) => (
        <li key={index}>
          <strong>Año: </strong>{item.anio}, <strong>toneladas: </strong> {item.toneladas.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default ListPredictions;