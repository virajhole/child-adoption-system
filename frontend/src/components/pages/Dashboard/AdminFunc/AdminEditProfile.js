import { useState } from "react";
import Footer from "../../../layout/Footer";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
const url = "http://localhost:8080/admin";

const AdminEditProfile = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [name, setName] = useState(user.name);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const [email, setEmail] = useState(user.email);
  const [id, setId] = useState(user.id); //hide
  const [password, setPassword] = useState(user.password); //hide
  const [Roles, setRoles] = useState(user.Roles); //hide
  const [isActive, setIsActive] = useState(user.isActive); //hide

  // console.log(user)
  // console.log(sessionStorage.getItem('user'))
  const history = useHistory();

  const EditProfile = () => {
    const body = {
      id: user.id,
      name: name,
      mobileNumber: mobileNumber,
      email: email,
      password: password,
      Roles: Roles,
      isActive: isActive,
    };

    axios
      .put(`http://localhost:8080/admin/edit-profile`, body)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const result = response.data;

        // alert("success");
        // history.push("/admin-dash");

        sessionStorage.setItem("user", JSON.stringify(response.data));
        setUser(JSON.stringify(response.data));
        // saveTokenInLocalStorage(result)
        // alert("error");
        // history.push("/aeditprofile");
      })
      .catch((err) => {
        alert("error");
        history.push("/aeditprofile");
      });
  };
  return (
    <div>
      <div className="container">
        <br></br>
        <form
          style={{ backgroundColor: "gray", maxWidth: 800 }}
          onSubmit={EditProfile}
        >
          <label htmlFor="">Name </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setName(e.target.value);
            }}
            defaultValue={user.name}
          />
          <br />

          <label htmlFor="">Mobile Number</label>
          <input
            type="text"
            pattern="[0-9]{10}"
            placeholder="Enter Mobile Number"
            title="Enter 10 Digit Number"
            className="form-control"
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
            defaultValue={user.mobileNumber}
          />
          <br />

          <label htmlFor="">Email </label>
          <input
            type="text"
            disabled
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={user.email}
          />
          <br />

          {/* <input type="hidden" className="form-control" onChange={(e) => {
        setId(e.target.value)
      }} defaultValue={user.id} /><br />

    <input type="hidden" className="form-control" onChange={(e) => {
        setPassword(e.target.value)
      }} defaultValue={user.password} /><br />


      <input type="hidden" className="form-control" defaultValue={user.isActive} onChange={(e) => {
        setIsActive(e.target.value)
      }}  /><br />

        <input type="hidden" className="form-control" onChange={(e) => {
        setRoles(e.target.value)
      }} defaultValue={user.Roles} /> */}
          <br />
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              // onClick={() => {
              //   EditProfile(user.Id);
              // }}
            >
              Submit
            </button>
            {"   "}
          </div>
        </form>
        <div className="col-1">
          <Link to="/admin-dash">
            <button className="btn btn-warning">Back</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AdminEditProfile;
