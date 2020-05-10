import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { string, object, array } from "yup";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";

const EditShareholders = () => {
  return (
    <>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>

      <EditShareholdersForm />
    </>
  );
};

const EditShareholdersForm = () => {
  const shareholders = useSelector((state) => state.shareholders);
  const dispatch = useDispatch();

  const onSubmit = ({ shareholders }) =>
    dispatch({ type: "UPDATE", load: { shareholders } });

  const { handleSubmit, register, errors } = useForm({
    validationSchema,
    defaultValues: { shareholders },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {shareholders.map((shareholder, i) => (
        <div key={i}>
          <h2>Add a Shareholder</h2>

          <div className="shareholder-form">
            <div>
              <label>Shareholder first name</label>
              <input name={`shareholders[${i}].firstName`} ref={register} />
              <ErrorMsg errors={errors} name={`shareholders[${i}].firstName`} />
            </div>

            <div>
              <label>Shareholder last name</label>
              <input name={`shareholders[${i}].lastName`} ref={register} />
              <ErrorMsg errors={errors} name={`shareholders[${i}].lastName`} />
            </div>

            <div>
              <label>Email</label>
              <input
                name={`shareholders[${i}].email`}
                type="email"
                ref={register}
              />
              <ErrorMsg errors={errors} name={`shareholders[${i}].email`} />
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

const ErrorMsg = (props) => (
  <ErrorMessage as="div" className="error" {...props} />
);

const validationSchema = object().shape({
  shareholders: array().of(
    object().shape({
      firstName: string().label("First name").required(),
      lastName: string().label("Last name").required(),
      email: string().label("Email").email().required(),
    })
  ),
});

export default EditShareholders;
