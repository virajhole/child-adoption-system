import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../../layout/Footer";
import { Link } from "react-router-dom";
//import AdminFunctions from '../../../../Axios/AdminAxios'
import ChildRow from "./PChildRow";

const PChilds = () => {
  const [child, setChild] = useState([]);

  useEffect(() => {
    console.log(`Childs got loaded`);
    getChilds();
  }, []);

  const getChilds = () => {
    axios.get("http://localhost:8080/parent/childdetails").then((response) => {
      // AdminFunctions.getAllChilds().then((response) => {

      console.log("response=" + response.status);
      // console.log(child.image);
      // console.log(child.childId);

      if ((response.status = 200)) {
        setChild(response.data);
      } else {
        alert("error while loading list of Childs");
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
            return <ChildRow key={child.childId} child={child} />;
          })}
        </tbody>
      </table>
      <br />
      <Link to="/parentdash">
        <button className="btn btn-warning">Back</button>
      </Link>
      <Footer />
    </div>
  );
};

export default PChilds;
