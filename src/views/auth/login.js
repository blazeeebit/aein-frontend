import Nav from "../../components/auth-comp/nav";
import {SignInForm, SocialForm} from "../../components/forms/signInForm";

const Auth = () => {

  return (
  <div className="container-fluid main-container">
     <Nav authType="/signup" linkName="Login"/>
      <div className="heading-cont container d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading-main">Login to Your Account</h1>
          <h3 className="sub-heading-main">Join our growing community today. Start your online business with a blast</h3>
      </div>
      <div className="form-animate">
      <SignInForm/>
      <SocialForm/>
      </div>
  </div>
  );
};

export default Auth;
