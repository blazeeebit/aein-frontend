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

export const AvgFunction = (arr) => {
  const average = arr.reduce((a,b) => a + b, 0) / arr.length;
  const roundedAvg = Math.round(average*100)/100;
  return roundedAvg;
}

export const RoundFunction = (arr) => {
  const average = arr.reduce((a,b) => a + b, 0) / arr.length;
  const rounded = Math.round(average);
  return rounded;
}