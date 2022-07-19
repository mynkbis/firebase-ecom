import React, { useState } from "react";
import { } from "firebase/auth";

import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase'
// import '../Pages/reset.css'

function ResetAdminPass() {
  const [email, setEmail] = useState("");

 
 const sendPasswordReset = async (email) => {
 try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
  return (
    <>
      Hello admin forget password
    {/* <div className="resetButton">Reset Password
      <div className="resetButtonBox">
       <div>
              <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Registered email...."
                  />
                  </div>
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
          submit
        </button>
        
      </div>
      </div> */}
      </>
  );
}

export default ResetAdminPass;