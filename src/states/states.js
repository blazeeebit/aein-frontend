import { useState } from "react";
import axios from 'axios'

export const useLoginData = () => {
    const [loginData,setLoginData] = useState({
        email: '',
        password: ''
    })

    const LoginWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post(`${process.env.REACT_APP_BACK_END}login`, loginData);
          console.log(res.data)
        }catch(error){
          console.log(error);
        }
      }

    return {loginData, setLoginData, LoginWithEmailAndPassword};
}

export const useRoute = () => {
    const [route, setRoute] = useState('');
    const routeChange = () => {
        console.log(route);
        // if(route === 'Login'){
        //     setRoute('Sign Up')
        // }else if(route === 'Sign Up'){
        //     setRoute('Login');
        // }
    }
    return {route, routeChange, setRoute}
}

export const useSignUpData = () => {
    const [signUpData,setSignUpData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    })

    const SignUpWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post(`${process.env.REACT_APP_BACK_END}login`, signUpData);
          console.log(res.data)
        }catch(error){
          console.log(error);
        }
      }

    return {signUpData, setSignUpData, SignUpWithEmailAndPassword};
}