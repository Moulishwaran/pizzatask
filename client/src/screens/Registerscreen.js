import React, { useState, useEffect } from "react";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  
   function register(){

       if(password!==cpassword)
       {
           alert("password not matched")
       }
       else{
           const user={
               name,
               email,
               password
           }
           console.log(user);
       }
   }


  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-md-start">
          <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <button onClick={register} className="btn mt-3">REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
