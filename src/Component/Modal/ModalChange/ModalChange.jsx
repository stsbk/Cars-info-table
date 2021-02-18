import React, {useState} from 'react';
import axios from "axios";

const baseURL = 'https://test-backend.esverito.com/api/car';

const ModalChange = ({id}) => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [engineType, setEngineType] = useState('');

    const carInfo = (id) => {
        axios.get(`${baseURL}/${id}`)
          .then(res => {
              setBrand(res.data.car.brand);
              setModel(res.data.car.model);
              setCarNumber(res.data.car.carNumber);
              setEngineType(res.data.car.engineType);
          });
    };

    const handleSubmit = () => {
        axios.put(`${baseURL}/${id}`, {brand, model, carNumber, engineType})
          .then(res => res);
    };

    const brandChange = (event) => {
        setBrand(event.target.value)
    };

    const modelChange = (event) => {
        setModel(event.target.value)
    };

    const carNumberChange = (event) => {
        setCarNumber(event.target.value)
    };

    const engineTypeChange = (event) => {
        setEngineType(event.target.value)
    };

    return (
      <>
          <button type="button" className="btn" data-toggle="modal" data-target="#changeModal"
                  onClick={() => carInfo(id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-pencil" viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
          </button>
          <div className="modal fade" id="changeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">EDIT CAR INFORMATION</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="container-fluid mb-4">
                              <form onSubmit={() => handleSubmit(id)}>
                                  <div className='row'>
                                      <div className="form-group col-6 mb-4">
                                          <input
                                            type="text"
                                            className="form-control is-valid"
                                            id="validationServer01"
                                            value={brand}
                                            onChange={brandChange}
                                          />
                                          <div className="valid-feedback">
                                              Brand
                                          </div>
                                      </div>
                                      <div className="form-group col-6">
                                          <input
                                            type="text"
                                            className="form-control is-valid"
                                            id="validationServer02"
                                            value={model}
                                            onChange={modelChange}
                                          />
                                          <div className="valid-feedback">
                                              Model
                                          </div>
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className="form-group col-6 mb-3">
                                          <input
                                            type="text"
                                            className="form-control is-valid"
                                            id="validationServer03"
                                            value={carNumber}
                                            onChange={carNumberChange}
                                          />
                                          <div className="valid-feedback">
                                              Car Number
                                          </div>
                                      </div>
                                      <div className="form-group col-6">
                                          <input
                                            type="text"
                                            className="form-control is-valid"
                                            id="validationServer04"
                                            value={engineType}
                                            onChange={engineTypeChange}
                                          />
                                          <div className="valid-feedback">
                                              Engine Type
                                          </div>
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-outline-info text-dark"
                                                  data-dismiss="modal">CANCEL
                                          </button>
                                          <button type="submit" className="btn btn-info info text-white">SAVE</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
};

export default ModalChange;
