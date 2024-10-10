import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../../layout/Footer";
import { Link } from "react-router-dom";
//import AdminFunctions from '../../../../Axios/AdminAxios'
import ChildRow from "./ChildRow";
import { Button } from "bootstrap";

const Childs = () => {
  const [child, setChild] = useState([]);

  useEffect(() => {
    console.log(`Childs got loaded`);
    getChilds();
  }, []);

  const getChilds = () => {
    axios.get("http://localhost:8080/admin/achilddetails").then((response) => {
      // AdminFunctions.getAllChilds().then((response) => {
      const result = response.data;
      // console.log(child.image)
      // console.log(child.childId)
      console.log(result.status);
      if (result.status === "success") {
        setChild(result.data);
      } else {
        alert("Error while loading list of Childs");
      }
    });
  };

  return (
    <div>
      <h1 className="page-title">All Childs</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Child Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>bloodGroup</th>
            <th>Colour Complexity</th>
            <th>Deficiency</th>
            <th>Education</th>
            <th>Gender</th>
            <th>MedicalHistory</th>
            <th>Other</th>
            <th>Status</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {child.map((child) => {
            return <ChildRow child={child} key={child.childId} />;
          })}
        </tbody>
      </table>{" "}
      <Link to="/admin-dash">
        <br />
        <button className="btn btn-warning">Back</button>
      </Link>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Childs;
