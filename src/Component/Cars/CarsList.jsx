import React from 'react';
import Car from './Car';
import left from './VectorLeft.svg';
import right from './VectorRight.svg';

const CarsList = ({cars}) => {
    return (
      <table className='table'>
          <thead>
          <tr>
              <th scope='col'>Brand</th>
              <th scope='col'>Car Number</th>
              <th scope='col'>Engine Type</th>
              <th scope='col'>Model</th>
              <th scope='col'>Actions</th>
          </tr>
          </thead>
          <tbody>
          {cars.map((item) => {
              return (
                <Car
                  key={item.id}
                  id={item.id}
                  brand={item.brand}
                  carNumber={item.carNumber}
                  engineType={item.engineType}
                  model={item.model}
                />
              )
          })}
          <tr>
              <td></td>
              <td></td>
              <td>
                  <div className="dropdown">
                      <label htmlFor="dropdownMenuButton">Lines on page:&ensp;</label>
                      <button className="btn btn-info dropdown-toggle drop text-white" type="button" id="dropdownMenuButton"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          5
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">10</a>
                          <a className="dropdown-item" href="#">15</a>
                          <a className="dropdown-item" href="#">20</a>
                      </div>
                  </div>
              </td>
              <td>{ (cars.length > 0) &&
                  `${cars.indexOf(cars[0])} - ${cars.length} out of ${cars.length}`}</td>
              <td>
                  <img src={left} alt='left'/>&ensp;&ensp;&ensp;<img src={right} alt='right'/>
              </td>
          </tr>
          </tbody>
      </table>
    );
};

export default CarsList;
