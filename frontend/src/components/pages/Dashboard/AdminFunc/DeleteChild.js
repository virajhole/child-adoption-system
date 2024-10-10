import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const DeleteChild = () => {
  const id = localStorage.getItem("childId");
  // alert(localStorage.getItem("childId"))
  const history = useHistory();

  useEffect(() => {
    console.log("http://localhost:8080/admin/" + id);
    loadChild();
  }, []);

  const loadChild = () => {
    console.log("http://localhost:8080/admin/" + id);
    axios.delete("http://localhost:8080/admin/" + id).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        alert(result.data);

        history.push("/aviewchilds");
      } else {
        alert("Error While Deleting Child");
      }
    });
  };

  return <h2>Child Deleted</h2>;
};

export default DeleteChild;
