import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUser } from '../functions/functions'
import Modal from '../components/modals/modal'

//active link

import Furn from '../assets/furn.jpg';
import Cloths from '../assets/clothing.jpg';
import Rest from '../assets/restaurant.jpg';
import Shoe from '../assets/shoes.jpg';
import Tech from '../assets/tech.jpg';

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
  const [visible, setVisible] = useState(false)

  const setVisibleNav = () => {
    setVisible(true)
  }

  const setHiddenNav = () => {
    setVisible(false)
  }

  return { setVisibleNav, visible, setHiddenNav }
}

//user info state

export const ShowUserInfo = () => {
  const { auth } = useSelector((state) => ({ ...state }))

  const { profileImage, username } = auth.user

  const capsUsername = username.charAt(0).toUpperCase() + username.slice(1)

  return { auth, profileImage, capsUsername }
}

export const AddActiveClass = () => {
  const [activeId, setActiveId] = useState(1)
  const [active, setActive] = useState([
    {
      id: 1,
      text: 'My Account',
    },
    {
      id: 2,
      text: 'Home Page',
    },
    {
      id: 3,
      text: 'My Shop',
    },
    {
      id: 4,
      text: 'My Orders',
    },
    {
      id: 5,
      text: 'Settings',
    },
  ])

  const [activeMenu, setActiveMenu] = useState(1);
  const [activeItem, setActiveItem] = useState([
    {
      _id: 1,
      text: 'All'
    },
    {
      _id: 2,
      text: 'Clothing',
      image: Cloths
    },
    {
      _id: 3,
      text: 'Shoes',
      image: Shoe
    },
    {
      _id: 4,
      text: 'Restaurants',
      image: Rest
    },
    {
      _id: 5,
      text: 'Technology',
      image: Tech
    },
    {
      _id: 6,
      text: 'Furniture',
      image: Furn
    },
  ])

  const [getProducts, setGetProduct] = useState([
    {
      id: 1,
      name: 'product 1'
    },
    {
      id: 2,
      name: 'product 3'
    },
    {
      id: 3,
      name: 'product 3'
    },
    {
      id: 4,
      name: 'product 4'
    },
    {
      id: 5,
      name: 'product 5'
    },
    {
      id: 6,
      name: 'product 6'
    },
    {
      id: 6,
      name: 'product 6'
    }
  ])

  const SetActiveClass = (id,setState) => {
    setState(id);
  }


  return { active, SetActiveClass, activeId, activeItem, activeMenu, setActiveId, setActiveMenu, getProducts }
}

export const UseLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    window.localStorage.removeItem('auth')
    navigate('/login')
  }

  return { Logout }
}

export const CustomModal = () => {
  return <Modal />
}

export const ModalState = () => {
  const [modalState, setModalState] = useState()

  const OpenModal = () => {
    console.log('modal opened')
    setModalState(true)
  }

  const CloseModal = () => {
    console.log('modal clsoed')
    setModalState(false)
  }

  return { OpenModal, CloseModal, modalState }
}

export const SetLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  return { isLoading, setIsLoading }
}

export const ShowError = () => {
  const [error, setError] = useState('')
  return { error, setError }
}

export const SubmitStore = () => {
  const { isLoading, setIsLoading } = SetLoader()
  const { auth } = ShowUserInfo()
  const [StoreData, setStoreData] = useState({
    user: auth.user,
    name: '',
    storeType: '',
    ratings: [1, 2, 3, 4, 2, 4, 1, 5, 2, 3, 1],
  })

  const { error, setError } = ShowError()

  const createStore = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACK_END}createstore`,
        StoreData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },
      )
      setIsLoading(false)
      setError(res.data)
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (error) {
      console.log(error.response)
    }
  }

  return { isLoading, createStore, StoreData, setStoreData, error }
}

export const GetStores = () => {
  const [getStores, setGetStores] = useState([])
  const { auth } = ShowUserInfo()
  const [productLoader, setProductLoader] = useState(false)
  const [errorLoader, setErrorLoader] = useState(false)
  let array = []
  let addToarray = []
  var counter = 0

  const getStore = async () => {
    setProductLoader(true)
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACK_END}getstores`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },
      )
      setTimeout(() => {
        setProductLoader(false)
      }, 5000)
      setGetStores(res.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  const deleteStore = async (id, index) => {
    setErrorLoader(true)

    for (var i = 0; i < getStores.length; i++) {
      if (i !== index) {
        array[counter] = getStores[i]
        counter++
      }
    }
    setGetStores(array)
    try {
      const res = axios.delete(
        `${process.env.REACT_APP_BACK_END}delete_store/${id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },
      )
      setErrorLoader(false)
    } catch (error) {
      console.log(error.response)
    }
  }


  return {
    getStore,
    getStores,
    auth,
    productLoader,
    deleteStore,
    errorLoader,
    addToarray,
  }
}


//getOrders 

export const GetOrders = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 5000);
  return {isLoading}
}