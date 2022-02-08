import Input from '../inputs/input'
import { Buttons, SocialButtons } from '../buttons/buttons'
import Google from '../../assets/google.png'
import { LoginWithSocial } from '../../functions/functions'
import { useLoginData, useSignUpData } from '../../states/states'

export const SignInForm = () => {
 
  const {loginData, setLoginData, LoginWithEmailAndPassword} = useLoginData();

  return (
    <div className="main-form container">
      <form
        action=""
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        onSubmit={LoginWithEmailAndPassword}
      >
        <Input inputType="email" inputPlaceholder="Your Email" fullInput="form-inputs" val={loginData.email} change={(e) => setLoginData({
          ...loginData,email: e.target.value
        })}/>
        <Input inputType="password" inputPlaceholder="Your Password" fullInput="form-inputs" val={loginData.password} change={(e) => setLoginData({
          ...loginData,password: e.target.value
        })} />
        <Buttons btnType="submit" btnText="Login to your account" />
      </form>
      <div className="container d-flex justify-content-center">
          <hr className="form-hr my-5"/>
      </div>
    </div>
  )
}

export const SocialForm = () => {
  return (
    <div className="container d-flex justify-content-center">
      <SocialButtons
        logo={Google}
        typeClass="btn-container-google"
        function={() => LoginWithSocial('google')}
      />
    </div>
  )
}


export const SignUpForm = () => {

  const {signUpData, setSignUpData, SignUpWithEmailAndPassword} = useSignUpData();
 
  return (
    <div className="main-form container">
      <form
        action=""
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
      >
        <div className="twoInputsContainer d-flex justify-content-between">
        <Input inputType="text" inputPlaceholder="Your First Name" fullInput="mini-input" val={signUpData.firstname} change={(e) => setSignUpData({
          ...signUpData,firstname: e.target.value
        })}/>
        <Input inputType="text" inputPlaceholder="Your Last Name" fullInput="mini-input" val={signUpData.lastname} change={(e) => setSignUpData({
          ...signUpData,lastname: e.target.value
        })}/>
        </div>
        <Input inputType="email" inputPlaceholder="Your Email" fullInput="form-inputs" val={signUpData.email} change={(e) => setSignUpData({
          ...signUpData,email: e.target.value
        })}/>
        <Input inputType="password" inputPlaceholder="Your Password" fullInput="form-inputs" val={signUpData.password} change={(e) => setSignUpData({
          ...signUpData,password: e.target.value
        })} />
        <Buttons btnType="submit" btnText="Register Your Account" />
      </form>
    </div>
  )
}