import axios from 'axios'

export const FetchUser = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACK_END}loggedInWithSocial`, {
      withCredentials: true,
    })
    if(res.data){
      const userData = res.data;
      return userData;
    }
  } catch (error) {
    console.log(error);
  }
}
