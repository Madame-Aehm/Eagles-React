import { useContext } from "react"
import AuthForm from "../components/AuthForm"
import { AuthContext } from "../context/AuthContext"

const Auth = () => {
  const { signup, login } = useContext(AuthContext);

  return (
   <>
    <AuthForm title="Login" submitFunction={login} />
    <h4>OR</h4>
    <AuthForm title="Sign up" submitFunction={signup} />
   </>
  )
}

export default Auth