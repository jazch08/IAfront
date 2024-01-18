import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import ListPredictions from "./listPredictiosn";
const FourSectionLayout = () => {

  let location = useLocation();
  const [grafico, setGrafico] = useState('');
  const[travelList, setTravelList] = useState([]);


  useEffect(() => {
    console.log(location.state.data)
    const data = location.state.data;
    const dataList = JSON.parse(data.prediccion);
    const dataList2 = dataList.data.map((el) => {
      return el[0]
    });
    const prediccions = []
    for (let i = 0; i < dataList2.length; i++) {
      const prediccion = {
        anio: dataList.index[i],
        toneladas: dataList2[i],
      }
      prediccions.push(prediccion)
    }

    console.log(prediccions)
    setTravelList(prediccions)
    setGrafico(data.grafica)

  }, [])

  return (
    <>
      <h1>Listado de predicciones</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
        <div style={{ marginRight: '40px' }}>
          <ListPredictions datos={travelList} />
        </div>

      <img
          src={`data:image/png;base64,${grafico}`}
          alt="Gráfico"
        />
      </div>
      <div style={{ marginTop: '40px' }}>
      <Link to='/'>
        <button>Volver a realizar una prediccion</button>
        </Link>
      </div>
    </>
  )
};

export default FourSectionLayout;
