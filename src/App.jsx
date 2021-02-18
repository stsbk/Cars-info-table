import React, {useState, useEffect} from 'react';
import CarService from "./Service/CarService";
import CarsList from './Component/Cars/CarsList';
import Header from "./Component/Header";
import ModalAdd from "./Component/Modal/ModalAdd";

function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getAll()
          .then((resp) => {
              setCars(resp.cars);
          })
    }, [cars]);

    return (
      <div className="container">
          <Header/>
          <div className='row justify-content-between'>
              <div className='col-4'><h1>Car List</h1></div>
              <div className='col-2'><ModalAdd/></div>
          </div>
          {<CarsList cars={cars}/>}
      </div>
    );
}

export default App;
