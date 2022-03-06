import React from 'react';

const Button = (props) => {
  const { buttonName, clickHandler } = props;

  return (
    // <button  onClick={clickHandler}> {buttonName} </button>

    <div className="input-group mb-3">
      <button
        className="btn btn-dark"
        type="button"
        id="button-addon2"
        onClick={clickHandler}
      >
         {buttonName}
      </button>
    </div>
  );
};

export default Button;
