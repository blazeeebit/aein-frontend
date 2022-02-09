import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FetchUser } from '../functions/functions'

//Google Login

export const useSocialLogin = () => {
  const navigate = useNavigate()
  const usedispatch = useDispatch()

  const LoginWithSocial = async () => {
    let timer = null
    const newWindow = window.open(
      `${process.env.REACT_APP_BACK_END}auth/google`,
      '_blank',
      'width=500,height=600',
    )

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          const userData = FetchUser()
          userData.then((result) => {
            window.localStorage.setItem('auth', JSON.stringify(result))
            usedispatch({
              type: 'LOGGED_IN_USER',
              payload: result,
            })
            navigate('/dashboard')
          })
          if (timer) {
            clearInterval(timer)
          }
        }
      }, 500)
    }
  }

  return { LoginWithSocial }
}

//Login user email password

export const useLoginData = () => {
  const navigate = useNavigate()
  const usedispatch = useDispatch()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const { error, setError, success, setSuccess } = AuthError()

  const LoginWithEmailAndPassword = async (e) => {
    e.preventDefault()

    const { email, password } = loginData

    const regExValidation = RegExFunction(password)

    if (regExValidation) {
      setSuccess(false)
      setError('Password must not contain special characters like [<>,.]')
    } else {
      const trimmedEmail = email.trim()
      const trimmedPassword = password.trim()

      try {
        const res = await axios.post(`${process.env.REACT_APP_BACK_END}login`, {
          email: trimmedEmail,
          password: trimmedPassword,
        })
        if (res.data) {
          window.localStorage.setItem('auth', JSON.stringify(res.data))
          usedispatch({
            type: 'LOGGED_IN_USER',
            payload: res.data,
          })
          navigate('/dashboard')
        }
      } catch (error) {
        setSuccess(false)
        setError(error.response.data)
      }
    }
  }

  return { loginData, setLoginData, LoginWithEmailAndPassword, error, success }
}

//Register using email password

export const useSignUpData = () => {
  const navigate = useNavigate()

  const [signUpData, setSignUpData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  })

  const { error, setError, success, setSuccess } = AuthError()

  const SignUpWithEmailAndPassword = async (e) => {
    e.preventDefault()
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      username,
    } = signUpData

    const regExValidation = RegisterRegExFunction(
      firstname,
      lastname,
      password,
      confirmPassword,
      username,
    )

    if (regExValidation) {
      setSuccess(false)
      setError('inputs must not contain special characters like [<>,.]')
    } else {
      if (password <= 7) {
        setSuccess(false)
        setError('Password must be between 8 and 64 characters')
      } else {
        if (password !== confirmPassword) {
          setSuccess(false)
          setError('Your Passwords do not match')
        } else {
          const trimmedFirstName = firstname.trim()
          const trimmedLastName = lastname.trim()
          const trimmedEmail = email.trim()
          const trimmedPassword = password.trim()
          const trimmedUsername = username.trim()

          try {
            const res = await axios.post(
              `${process.env.REACT_APP_BACK_END}register`,
              {
                firstname: trimmedFirstName,
                lastname: trimmedLastName,
                email: trimmedEmail,
                username: trimmedUsername,
                password: trimmedPassword,
                profileImage: trimmedUsername,
              },
            )
            if (res) {
              if (res.data === 'User already exists with this email') {
                setSuccess(false)
                setError(res.data)
                setTimeout(() => {
                  navigate('/login')
                }, 2000)
              } else {
                setSuccess(true)
                setError(res.data)
                setTimeout(() => {
                  navigate('/login')
                }, 2000)
              }
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }

  return {
    signUpData,
    setSignUpData,
    SignUpWithEmailAndPassword,
    success,
    error,
  }
}

export const AuthError = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  return { error, setError, success, setSuccess }
}

const RegExFunction = (password) => {
  var format = /[<>,.]/
  if (format.test(password)) {
    return true
  } else {
    return false
  }
}

const RegisterRegExFunction = (
  firstname,
  lastname,
  password,
  confirmPassword,
  username,
) => {
  var format = /[<>,.]/
  if (
    format.test(password) ||
    format.test(firstname) ||
    format.test(lastname) ||
    format.test(confirmPassword) ||
    format.test(username)
  ) {
    return true
  } else {
    return false
  }
}


//visible states

export const VisibleNav = () => {
    const [visible, setVisible] = useState(false);

    const setVisibleNav = () => {
        setVisible(true);
    }

    const setHiddenNav = () => {
        setVisible(false);
    }

    return {setVisibleNav, visible, setHiddenNav}
}