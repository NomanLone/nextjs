import React, { useState } from 'react';

export default function InputComponent({ value, error, name, handleValidation, handleInputChange, ...props }) {
  const [touched, setTouched] = useState(!!value);
  const [inputValue, setInputValue] = useState(value || '');
  const handleChange = (value) => {
    setInputValue(value);
    handleInputChange()(value);
  };

  const handleBlur = () => {
    handleValidation()(inputValue);
    setTouched(true);
  };

  const handleFocus = () => {
    setTouched(false);
    props.resetError();
  };

  const valid = touched ? (error ? false : true) : null;
  return (
    <React.Fragment>
      <div className='input-field'>
        <label className='input-field__label'>
          <span className='input-field__label-text'>{props.label}</span>
          <span className={`input-field__wrapper ${error ? 'input-field__wrapper--error' : ''}`}>
            <input
              id={name}
              name={name}
              type={props.type}
              pattern={props.pattern}
              className='input-field__control'
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={props.disabled}
              placeholder={props.placeholder}
              data-hj-suppress
              required={props.validation} />
            {valid && <span className='input-field__icon input-field__icon--valid'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon' viewBox='0 0 12 10'><path fill='none' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1.5 5.124L5.01 8.75l5.49-7.5' /></svg>
            </span>}
            {error &&
              <span className='input-field__icon input-field__icon--invalid'>
                <svg xmlns='http://www.w3.org/2000/svg' className='icon' viewBox='0 0 2 12'><g fill='none' fillRule='evenodd'><path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1v6' /><path fill='#fff' d='M2 11a1 1 0 11-2 0 1 1 0 012 0' /></g></svg>
              </span>}
          </span>
        </label>
        {error &&
          <div className='personal-info__message personal-info__message--error mt-2'>{props.errorMsg}</div>
        }
      </div>
      {props.legalText && <div className='personal-info__legal-text' dangerouslySetInnerHTML={{ __html: props.legalText }} />}
    </React.Fragment>
  );

}
