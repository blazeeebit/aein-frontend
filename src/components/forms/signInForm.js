import Input from '../inputs/input'
import { Buttons, SocialButtons } from '../buttons/buttons'
import Google from '../../assets/google.png'
import { useLoginData, useSignUpData, useSocialLogin } from '../../states/states'

export const SignInForm = () => {
  const {
    loginData,
    setLoginData,
    LoginWithEmailAndPassword,
    error,
    success,
  } = useLoginData()

  return (
    <div className="main-form container">
      <form
        action=""
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        onSubmit={LoginWithEmailAndPassword}
      >
        <Input
          inputType="email"
          inputPlaceholder="Email"
          fullInput="form-inputs"
          val={loginData.email}
          change={(e) =>
            setLoginData({
              ...loginData,
              email: e.target.value,
            })
          }
        />
        <Input
          inputType="password"
          inputPlaceholder="Password"
          fullInput="form-inputs"
          val={loginData.password}
          change={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />
        <Buttons btnType="submit" btnText="Login to your account" />
        {error !== '' ? (
          <span className={success ? 'success' : 'fail'}>{error}</span>
        ) : (
          ''
        )}
      </form>
      <div className="container d-flex justify-content-center">
        <hr className="form-hr my-5" />
      </div>
    </div>
  )
}

export const SocialForm = () => {

  const {LoginWithSocial} = useSocialLogin();

  return (
    <div className="container d-flex justify-content-center">
      <SocialButtons
        logo={Google}
        typeClass="btn-container-google"
        function={LoginWithSocial}
      />
    </div>
  )
}

export const SignUpForm = () => {
  const {
    signUpData,
    setSignUpData,
    SignUpWithEmailAndPassword,
    error,
    success,
  } = useSignUpData()

  return (
    <div className="main-form container">
      <form
        action=""
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        onSubmit={SignUpWithEmailAndPassword}
      >
        <div className="twoInputsContainer d-flex justify-content-between">
          <Input
            inputType="text"
            inputPlaceholder="First Name"
            fullInput="mini-input"
            val={signUpData.firstname}
            change={(e) =>
              setSignUpData({
                ...signUpData,
                firstname: e.target.value,
              })
            }
          />
          <Input
            inputType="text"
            inputPlaceholder="Last Name"
            fullInput="mini-input"
            val={signUpData.lastname}
            change={(e) =>
              setSignUpData({
                ...signUpData,
                lastname: e.target.value,
              })
            }
          />
        </div>
        <Input
          inputType="email"
          inputPlaceholder="Email"
          fullInput="form-inputs"
          val={signUpData.email}
          change={(e) =>
            setSignUpData({
              ...signUpData,
              email: e.target.value,
            })
          }
        />
        <Input
          inputType="text"
          inputPlaceholder="User Name"
          fullInput="form-inputs"
          val={signUpData.username}
          change={(e) =>
            setSignUpData({
              ...signUpData,
              username: e.target.value,
            })
          }
        />
        <Input
          inputType="password"
          inputPlaceholder="Password"
          fullInput="form-inputs"
          val={signUpData.password}
          change={(e) =>
            setSignUpData({
              ...signUpData,
              password: e.target.value,
            })
          }
        />
        <Input
          inputType="password"
          inputPlaceholder="Confirm Password"
          fullInput="form-inputs"
          val={signUpData.confirmPassword}
          change={(e) =>
            setSignUpData({
              ...signUpData,
              confirmPassword: e.target.value,
            })
          }
        />
        <Buttons btnType="submit" btnText="Register Your Account" />
        {error !== '' ? (
          <span className={success ? 'success' : 'fail'}>{error}</span>
        ) : (
          ''
        )}
      </form>
    </div>
  )
}
