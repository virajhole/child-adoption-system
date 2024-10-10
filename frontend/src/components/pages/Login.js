import React from "react";
import { useHistory } from "react-router-dom";
import "../../login.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import UserFunctions from "../../Axios/UserAxios";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { encrypt, decrypt } from "n-krypta";
import { NavLink } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const history = useHistory();

  const { register, errors } = useForm();

  const onLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const pass = e.target.elements.password.value;
    const encryptedPass = encrypt(pass + "snehalaya", "snehalaya");
    // console.log(encryptedPass)
    const emailandpass = {
      email: email,
      password: encryptedPass,
    };
    // console.log(encryptedPass);
    // console.log(decrypt(encrypt(pass,"snehalaya"),"snehalaya"))

    UserFunctions.login(emailandpass).then((res) => {
      console.log(res.data);
      console.log("hii");
      sessionStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.role === "ADMIN") {
        alert("Login Succesfully");
        history.push("/admin-dash");
      } else if (res.data.role === "PARENT") {
        alert("Login Succesfully");
        history.push("/parentdash");
      } else {
        alert("Please enter valid Email or Password");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div id="login">
        <h3 className="text-center text-Black pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={onLogin}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email Address :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      className={classNames("form-control", {
                        "is-invalid": errors.email,
                      })}
                      id="username"
                      name="email"
                      ref={register({
                        required: "this field is required.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "please enter a valid e-mail address.",
                        },
                      })}
                    ></input>
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password :
                    </label>
                    <br></br>
                    <input
                      type="password"
                      className={classNames("form-control", {
                        "is-invalid": errors.password,
                      })}
                      name="password"
                      id="password"
                      ref={register({
                        required: "this field is required.",
                      })}
                    ></input>
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span>
                      &nbsp;
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        ></input>
                      </span>
                    </label>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        // style={{ marginLeft: 50 }}
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="login"
                      ></input>
                    </div>{" "}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="text-center mt-4"
                    >
                      {/* <a href={"/ForgetPassword"}>Forgot Password?</a> */}
                      <NavLink className="nav-link" exact to="/ForgetPassword">
                        <Button outline color="info">
                          Forget Password<br></br>
                          <i
                            className="fa fa-user-circle fa-2x"
                            aria-hidden="true"
                          ></i>
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
