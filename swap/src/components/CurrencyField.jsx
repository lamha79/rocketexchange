import React, { useState } from "react";

const CurrencyField = props => {
  const getPrice = (value) => {
    props.getSwapPrice(value)
  }

  const [value, setValue] = useState(0);

  const handleChangeInput = (e) => {
    e.preventDefault();
    const { value = "" } = e.target;
    const parsedValue = value.replace(/[^\d.]/gi, "");
    setValue(parsedValue);
    props.getSwapPrice(parsedValue);
};

  return (
    <div className="row currencyInput">
      <div className="col-md-6 numberContainer">
        {props.loading ? (
          <div className="spinnerContainer">
            <props.spinner />
          </div>
        ) : (
          <input 
            className="currencyInputField"
            placeholder="0.0"
            value={props.value}
            onChange={handleChangeInput}
            onBlur={e => (props.field === 'input' ? getPrice(e.target.value) : null)}
          />
        )}
      </div>
      <div className="col-md-6 tokenContainer">
        <span className="tokenName">{props.tokenName}</span>
        <div className="balanceContainer">
          <span className="balanceAmount">Balance: {props.isConnected ? props.balance.toFixed(3) : Number(0).toFixed(3)}</span>
        </div>
      </div>
    </div>
  )
}

export default CurrencyField
