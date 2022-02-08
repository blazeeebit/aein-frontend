import { useEffect } from 'react'

const Windows = () => {

  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000)
  }, [])

  return <div>Thanks for loging in</div>
}

export default Windows
