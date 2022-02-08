import axios from 'axios'

const fetchUser = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACK_END}loggedInWithSocial`, {
      withCredentials: true,
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

export const LoginWithSocial = async (social) => {
  let timer = null
  const newWindow = window.open(
    `http://localhost:5000/auth/${social}`,
    '_blank',
    'width=500,height=600',
  )

  if (newWindow) {
    timer = setInterval(() => {
      if (newWindow.closed) {
        console.log('were authenticated')
        fetchUser()
        if (timer) {
          clearInterval(timer)
        }
      }
    }, 500)
  }
}

