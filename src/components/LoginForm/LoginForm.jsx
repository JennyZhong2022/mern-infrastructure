import { useState } from "react"
import * as usersService from'../../utilities/users-service'

const LoginForm = ({ setUser }) => {
  const [credentials, setCredentials] = useState(
    {
      email: '',
      password:''
    }
  )

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const user = await usersService.login(credentials)
      setUser(user)
     } catch (error) {
      setError('Log In Failed,Try Again')
    }
  }
  

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}

export default LoginForm