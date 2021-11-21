import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { Input, createField } from "../common/FormsControl/FormsControl";
import { requiredField } from "../utils/validators/validators";
import s from "../common/FormsControl/FormsControl.module.css";

export const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createField("E-mail", "email", requiredField, Input)}
        {createField("Password", "password", requiredField, Input, {
          type: "password",
        })}
        {createField(
          null,

          "rememberMe",
          [],
          Input,
          {
            type: "checkbox",
          },
          "remember me"
        )}
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&
          createField(
            "Write symbols from image",
            "captcha",
            requiredField,
            Input
          )}
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
