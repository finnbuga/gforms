import React from "react";

import "./style.css";
import useShareholders from "../useShareholders";

const EditShareholders = () => (
  <>
    <div className="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum.
      </p>
    </div>

    <EditShareholdersForm />
  </>
);

const EditShareholdersForm = () => {
  const { shareholders, handleSubmit, register, ErrorMsg } = useShareholders();

  return (
    <form onSubmit={handleSubmit}>
      {shareholders.map((shareholder, i) => (
        <div key={i}>
          <h2>Add a Shareholder</h2>

          <div className="shareholder-form">
            <div>
              <label>Shareholder first name</label>
              <input name={`shareholders[${i}].firstName`} ref={register} />
              <ErrorMsg name={`shareholders[${i}].firstName`} />
            </div>

            <div>
              <label>Shareholder last name</label>
              <input name={`shareholders[${i}].lastName`} ref={register} />
              <ErrorMsg name={`shareholders[${i}].lastName`} />
            </div>

            <div>
              <label>Email</label>
              <input
                name={`shareholders[${i}].email`}
                type="email"
                ref={register}
              />
              <ErrorMsg name={`shareholders[${i}].email`} />
            </div>

            <div>
              <button>Add shareholder</button>
            </div>
          </div>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditShareholders;
