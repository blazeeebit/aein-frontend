import Nav from "../../components/auth-comp/nav";
import {SignInForm, SocialForm} from "../../components/forms/signInForm";
import { VisibleNav } from "../../states/states";

const Auth = () => {

  const {setVisibleNav, visible, setHiddenNav} = VisibleNav();

  return (
  <div className="container-fluid main-container">
    <div className="burger-cont" onClick={setVisibleNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    {!visible ? <Nav authType="/signup" linkName="Sign Up" visibleClass="auth-nav-invisible" /> : <Nav authType="/signup" linkName="Sign Up" visibleClass="auth-nav-visible" function={setHiddenNav}/> }
      <div className="heading-cont d-flex flex-column justify-content-center align-items-center">
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
