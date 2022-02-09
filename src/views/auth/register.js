import Nav from "../../components/auth-comp/nav";
import {SignUpForm} from "../../components/forms/signInForm";
import PrivateRoute from "../../components/privateRoutes/privateRoute";

const Register = () => {

  const res = PrivateRoute();

  console.log(res)

  return (
  <div className="container-fluid main-container">
     <Nav  authType="/login" linkName="Login"/>
      <div className="heading-cont container d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading-main">Register For Your New Account</h1>
          <h3 className="sub-heading-main">Join our growing community today. Start your online business with a blast</h3>
      </div>
      <div className="form-animate">
      <SignUpForm/>
      </div>
  </div>
  );
};

export default Register;
