import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { Button, Form } from "reactstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import withRouter from "../../Components/Common/withRouter";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions";

const Login = (props) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(5, "Password should be more then 5 characters"),
    }),
    onSubmit: (values) => {
      handleSignin(values);
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  const handleSignin = (values) => {
    setUserCredentials({
      username: values.username,
      password: values.password,
    });
    formik.handleReset();
    setShowPassword(false);
  };

  document.title = "IUOE";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="form">
          <Form onSubmit={formik.handleSubmit} action="#">
            <div className="div">
              <div className="overlap-2">
                <div className="text-wrapper">Welcome Back !</div>
                <div className="sign-in-to-continue">Sign in to continue</div>
              </div>
              <div className="overlap-3">
                <div className="username">
                  <label className="label" htmlFor="input-1">
                    Email ID
                  </label>
                  <div className="input ">
                    <input
                      className={`input-field ${
                        formik.touched.username && formik.errors.username
                          ? "error-input error-placeholder"
                          : ""
                      }`}
                      name="username"
                      id="username"
                      placeholder="Enter email ID"
                      type="text"
                      {...formik.getFieldProps("username")}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <span className="error-message">
                        {formik.errors.username}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="password">
                  <label className="label" htmlFor="input-1">
                    Password
                  </label>
                  <div className="input">
                    <input
                      className={`input-field ${
                        formik.touched.password && formik.errors.password
                          ? "error-input error-placeholder"
                          : ""
                      }`}
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      type={showPassword ? "text" : "password"}
                      {...formik.getFieldProps("password")}
                    />
                    <span
                      id="togglePassword"
                      onClick={togglePasswordVisibility}
                    >
                      {formik.values.password ? (
                        showPassword ? (
                          <i className="eye">
                            <FaEyeSlash />
                          </i>
                        ) : (
                          <i className="eye">
                            <FaEye />
                          </i>
                        )
                      ) : null}
                    </span>
                    {formik.touched.password && formik.errors.password ? (
                      <span className="error-message">
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="sign-in-button">
                <Button color="success" className="overlap-4" type="submit">
                  Sign In
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default withRouter(Login);
