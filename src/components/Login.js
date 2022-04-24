import React, { useState } from "react";

function Login() {
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [showText,setShowText] = useState("")

    const formSubmit = () =>{
     if(emailValidation(email)){
       setShowText("Successfully Login..")
     }
     else{
        setShowText("Please Enter corrent email...")
     }
    }

    const emailValidation = (email) =>{
      if(email !==  "subhra") return false;
      else return true
    }

    const Reset = () =>{
        setemail("")
        setpass("")
        setShowText("")
    }
  return (
    <div>
      <div>
        <h4>Login Form</h4>
        <br />
        <div style={{fontWeight:'bold'}}>{showText}</div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Enter your email.."
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password.."
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <br />
      </div>
      <div>
        <button onClick={formSubmit}>Submit</button>
        <br />
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default Login;
