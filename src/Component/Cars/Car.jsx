import React from 'react';
import DeleteButton from "../DeleteButton";
import CarService from "../../Service/CarService";
import ModalChange from "../Modal/ModalChange";

const Car = ({ brand, carNumber, engineType, model, id }) => {
    const deleteItem = (id) => {
        CarService.deleteCar(id)
          .then((resp) => resp);
    };

    return (
      <tr>
          <td>{brand}</td>
          <td>{carNumber}</td>
          <td>{engineType}</td>
          <td>{model}</td>
          <td>
              <ModalChange id={id} />
              <DeleteButton onClick={() => deleteItem(id)} />
          </td>
      </tr>
    );
};

export default Car;
