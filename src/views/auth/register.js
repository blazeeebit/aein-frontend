import Nav from "../../components/auth-comp/nav";
import {SignUpForm} from "../../components/forms/signInForm";
import PrivateRoute from "../../components/privateRoutes/privateRoute";
import { VisibleNav } from "../../states/states";

const Register = () => {

  const {setVisibleNav, visible, setHiddenNav} = VisibleNav();

  return (
  <div className="container-fluid main-container">
     <div className="burger-cont" onClick={setVisibleNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    {!visible ? <Nav authType="/login" linkName="Login" visibleClass="auth-nav-invisible" /> : <Nav authType="/login" linkName="Login" visibleClass="auth-nav-visible" function={setHiddenNav}/> }
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
