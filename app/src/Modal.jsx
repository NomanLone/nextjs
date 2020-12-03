import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles/modal.scss';

const Modal = () => {
  console.log(1111);
  const history = useHistory();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';
    return () => {
      return body.style.overflowY = 'auto';
    }
  }, []);

  return (
    <div className='modal-container'>
      <div className="modal__order">
        <h2 className='modal__title'>Enter your information</h2>
        <div className="row justify-content-center">
          <div className="col-10">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              </div>
              <input type="text" class="form-control" placeholder="Firstname" aria-label="Firstname" />
            </div>
          </div>
          <div className="col-10">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              </div>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Lastname" />
            </div>
          </div>
          <div className="col-10">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
              </div>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Lastname" />
            </div>
          <button className='cart__order'>Order</button>
          </div>
        </div>



        <button className='modal__close' onClick={() => history.goBack()}>
          <svg className='cart__header-close-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 12l8 8 8 8M28 12l-8 8-8 8" />
            </g>
          </svg>
        </button>
      </div>
    </div >
  );
};

export default Modal;