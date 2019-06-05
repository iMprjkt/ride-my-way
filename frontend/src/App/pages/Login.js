import React from "react";
import FormSelect from "../components/FormSelect";
import "../css/signin.css";

const LoginPage = () => {
  return (
    <div className="login-wrap">
      <div className="heading">
        <h1>RIDE MY WAY</h1>
      </div>
      <FormSelect />
    </div>
  );
};
// class LoginPage extends Component {
//     render() {
//         return (
//             <div className="login-wrap">
//                 <div className="heading">
//                 <h1>RIDE MY WAY</h1>
//                 </div>
//                 <FormSelect />
//             </div>

//         )
//     }
// }

export default LoginPage;
