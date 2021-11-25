import React from "react";
import { Field } from "redux-form";
import "react-redux";
import s from "./FormsControl.module.css";

export const FormsControl = ({
  meta: { touched, error },

  children,
}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...restProps} {...input} className={s.myposts_textarea} />
    </FormsControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <input {...restProps} {...input} />
    </FormsControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        validate={validators}
        name={name}
        component={component}
        {...props}
      />

      {text}
    </div>
  );
};
