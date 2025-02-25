import React, { useState } from "react";

import { Row, Col } from "reactstrap";
import DashNavbar from "../../../layout/ADashNavbar";
import DashMenuBar from "../AdminDashMenuBar";
import UserFunctions from "../../../../Axios/UserAxios";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { encrypt, decrypt } from "n-krypta";

const ChangePassword = () => {
  const [state, setState] = useState("");
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, handleSubmit, errors, getValues } = useForm();

  const changepassword = () => {
    // console.log(state);
    const user = JSON.parse(sessionStorage.getItem("user"));
    // const temp = JSON.parse(user);
    const email = user["email"];
    const oldPass = user["password"];
    // console.log(oldPass);
    // console.log(email);
    const oldPasss = encrypt(oldPassword + "snehalaya", "snehalaya");

    

    if (oldPass !== oldPasss) {
      alert("Enter your Old Password Correct");
      history.push("/change-password");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password fields do not match");
      history.push("/change-password");
      return;
    } else {
      const encryptedPass = encrypt(newPassword + "snehalaya", "snehalaya");

      const body = {
        email: email,
        password: encryptedPass,
      };
      // console.log(JSON.stringify(body)+"iiiiiiiiiiiiiiiiiiiiiiiiiiiii")
      UserFunctions.changePassword(body).then((res) => {
        // console.log(res.data);
        // sessionStorage.removeItem("user")
        history.push("/");
      });
    }
  };

  return (
    <div>  
      <DashNavbar /><form> <div className="py-5">
        <Row>
          <Col md={2}>
            <DashMenuBar />
          </Col>
          <Col md={8}>
            <br></br>
            <br></br>

            <div className="card bg-light">
              <h4 className="card-title mt-3 text-center">Change Password</h4>
              <br></br>
              <br></br>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="form-group input-group"
              >
            
                <h5>Old Password :</h5>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <input
                  type="password"
                  placeholder="Enter Old Password"
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="form-group input-group"
              >
                <h5>New Password : </h5>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="password"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  // className={classNames("form-control", {
                  //   "is-invalid": errors.password,
                  // })}
                  name="password"
                  id="password"
                  required
                  placeholder="Enter New Password"
                  pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}'
                  title="6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
                  // ref={register({
                  //   required: "this field is required.",
                  //   pattern: {
                  //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                  //     title:
                  //       "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.",
                  //   },
                  // })}
                ></input>

                
                {/* {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )} */}
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="form-group input-group"
              >
                <h5>Confirm Password :</h5>
                &nbsp;&nbsp;
                <input
                  type="password"
                  required
                  // style={{ width: 300 }}
                  // className={classNames("form-control", {
                  //   "is-invalid": errors.confirm_password,
                  // })}
                  placeholder="Confirm Your Password"
                  name="confirm_password"
                  pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}'
                  title="6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
                 
                  // ref={register({
                  //   required: "this field required.",
                  //   validate: (value) =>
                  //     value === getValues("password") ||
                  //     "password doesn't match.",
                  // })}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></input>
                {/* {errors.confirm_password && (
                  <div className="invalid-feedback">
                    {errors.confirm_password.message}
                  </div>
                )} */}
              </div>

              <br></br>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="form-group"
              >
                <button
                  // onClick={changepassword}
                  onClick={handleSubmit(changepassword)}
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ maxWidth: 300 }}
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div></form>
     
    </div>
  );
};

export default ChangePassword;
