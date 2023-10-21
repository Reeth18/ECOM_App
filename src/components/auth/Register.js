import axios from "axios";
import React, { useState } from "react";
import Url from "../../connection";
export default function Register() {
  // data related to username, email and password
  const [register, setRegister] = useState({});

  // we are going to handle inputs dynamically
  console.log("I am inside register");
  function handleChange(event) {
    setRegister((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  console.log(`register state`, register);
  async function handleClick() {
    try {
      const response = await axios.post(`${Url}/auth/register`, register);
      console.log(response);

      if (response.status == 200) {
        alert("New User registered");
      }
    } catch (error) {
        console.log(error.message);
      if (error.response.status == 401) {
        alert("User already exists.....");
      }
    }
  }
  return (
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
            name="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp" onChange={handleChange}
        />
        <label for="username" class="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp" onChange={handleChange}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          class="form-control"
          id="exampleInputPassword1" onChange={handleChange}
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
