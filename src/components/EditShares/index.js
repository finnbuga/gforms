import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { object, array, bool, number } from "yup";

import "./style.css";

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
                type="number"
                name={`shareholders[${i}].share`}
                ref={register}
              />
            </div>

            <div className="box">
              <input
                type="checkbox"
                name={`shareholders[${i}].isDirector`}
                ref={register}
              />
            </div>
          </div>

          <ErrorMsg errors={errors} name={`shareholders[${i}].isDirector`} />
          <ErrorMsg errors={errors} name={`shareholders[${i}].share`} />
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
      share: number().label("Shares").min(0).max(100).required(),
      isDirector: bool().label("Director"),
    })
  ),
});

export default EditShares;
