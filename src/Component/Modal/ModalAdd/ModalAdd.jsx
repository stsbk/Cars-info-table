import React, {useState} from 'react';
import axios from "axios";

const baseURL = 'https://test-backend.esverito.com/api/car';

const ModalAdd = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [engineType, setEngineType] = useState('');

    const handleSubmit = () => {
        axios.post(baseURL, {brand, model, carNumber, engineType})
          .then((resp) => resp);
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
          <button type="button" className="btn btn-info text-white" data-toggle="modal" data-target="#addModal">
              ADD CAR
          </button>
          <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">ADD A NEW CAR</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="container-fluid">
                              <form onSubmit={handleSubmit}>
                                  <div className='row'>
                                      <div className="form-group col-6 mb-4">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="brand"
                                            placeholder='Brand'
                                            onChange={brandChange}
                                          />
                                      </div>
                                      <div className="form-group col-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="model"
                                            placeholder='Model'
                                            onChange={modelChange}
                                          />
                                      </div>
                                  </div>
                                  <div className='row'>
                                      <div className="form-group col-6 mb-3">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="carNumber"
                                            placeholder='Car Number'
                                            onChange={carNumberChange}
                                          />
                                      </div>
                                      <div className="form-group col-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="engineType"
                                            placeholder='Engine Type'
                                            onChange={engineTypeChange}
                                          />
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-outline-info text-dark"
                                                  data-dismiss="modal">
                                              CANCEL
                                          </button>
                                          <button type="submit" className="btn btn-info text-white">
                                              OK
                                          </button>
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

export default ModalAdd;
