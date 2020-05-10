import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { object, array, string, bool, number } from "yup";

const validationSchema = object().shape({
  shareholders: array().of(
    object().shape({
      firstName: string().label("First name"),
      lastName: string().label("Last name"),
      email: string().label("Email").email(),
      share: number().label("Shares").min(0).max(100),
      isDirector: bool().label("Director"),
    })
  ),
});

const useShareholders = () => {
  const shareholders = useSelector((state) => state.shareholders);
  const dispatch = useDispatch();

  const onSubmit = ({ shareholders }) =>
    dispatch({ type: "UPDATE", load: { shareholders } });

  const { handleSubmit, register, errors } = useForm({
    validationSchema,
    defaultValues: { shareholders },
  });

  const ErrorMsg = (props) => (
    <ErrorMessage errors={errors} as="div" className="error" {...props} />
  );

  return {
    shareholders,
    handleSubmit: handleSubmit(onSubmit),
    register,
    ErrorMsg,
  };
};

export default useShareholders;
