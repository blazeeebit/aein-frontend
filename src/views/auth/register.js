import Nav from "../../components/auth-comp/nav";
import {SocialForm, SignUpForm} from "../../components/forms/signInForm";

const Register = () => {
  return (
  <div className="container-fluid main-container">
     <Nav  authType="/login" linkName="Sign Up"/>
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
