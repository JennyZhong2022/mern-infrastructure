import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"

const AuthPage = ({ setUser }) => {
  const [showSignUp, setShowSignUp]=useState(true)
  return (
    <main>
      {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />}
      <button onClick={()=>setShowSignUp(!showSignUp)}>
        {
          showSignUp ?
            'login'
            :
            'Sign Up'
        }
     </button>
      
    </main>
  )
}

export default AuthPage
