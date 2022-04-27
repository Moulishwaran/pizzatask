import React from "react";

export default function Loginscreen() {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-md-start">
          <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
            />

            <button className="btn mt-3">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
