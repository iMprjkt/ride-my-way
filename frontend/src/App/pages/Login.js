import React from "react";

import "../css/signin.css";
import LoginHeader from "../components/LoginHeader";

export default function LoginPage() {
  // class LoginPage extends Component {
  //     render() {
  return (
    <div className="login-wrap">
      <div className="heading">
        <h1>RIDE MY WAY</h1>
      </div>
      <LoginHeader />
    </div>
  );
}
