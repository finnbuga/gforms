import React from "react";

import "./style.css";
import useShareholders from "../useShareholders";

const EditShares = () => (
  <>
    <div className="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <EditSharesForm />
  </>
);

const EditSharesForm = () => {
  const { shareholders, handleSubmit, register, ErrorMsg } = useShareholders();

  return (
    <form onSubmit={handleSubmit}>
      <div className="shares-row">
        <div className="first">Shareholders</div>
        <div className="box">Shares %</div>
        <div className="box">Director</div>
      </div>

      {shareholders.map((shareholder, i) => (
        <div key={i}>
          <div className="shares-row">
            <div className="first">
              <h3>{shareholder.firstName + " " + shareholder.lastName}</h3>
              {shareholder.email}
            </div>

            <div className="box">
              <input
                ref={register}
                type="number"
                name={`shareholders[${i}].share`}
              />
            </div>

            <div className="box">
              <input
                ref={register}
                type="checkbox"
                name={`shareholders[${i}].isDirector`}
              />
            </div>
          </div>

          <ErrorMsg name={`shareholders[${i}].share`} />
          <ErrorMsg name={`shareholders[${i}].isDirector`} />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditShares;
