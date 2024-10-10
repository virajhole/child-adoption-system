import React, { Component } from "react";
import { useState } from "react";
import { encrypt, decrypt } from "n-krypta";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState("");
  var history = useHistory();

  const onSubmit = () => {
    console.log(email);
    console.log(password);
    const encryptedPass = encrypt(password + "snehalaya", "snehalaya");
    const data = {
      email: email,
      password: encryptedPass,
    };
    console.log(data);
    console.log("hello");
    console.log(JSON.stringify(data));
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //var user=JSON.stringify(xhr.responseText())
        console.log("rspp arrived");
        console.log(xhr.responseText);
        setuser(xhr.responseText);
        sessionStorage.setItem("user", JSON.stringify(user));

        if (user.role === "Admin") {
          history.push("/admin-dash");
        } else {
          alert("plz enter valid email");
        }
      }
    };

    xhr.open("post", "http://localhost:8080/user/login");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send(JSON.stringify(data));
    // axios.post('http://localhost:8080/user/login',data).then((resp)=>{
    //     console.log(resp.data)
    //     sessionStorage.setItem("user", JSON.stringify(resp.data));
    //     if (resp.data.role === "ADMIN") {
    //       alert("Login Succesfully");
    //       history.push("/admin-dash");
    //     } else if (resp.data.role === "PARENT") {
    //       alert("Login Succesfully");
    //       history.push("/parentdash");
    //     } else {
    //       alert("Please enter valid Email or Password");
    //     }
    // })
  };

  return (
    <div>
      <input
        type={"text"}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      ></input>

      <input
        type={"text"}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Login;
