import AuthForm from "../components/AuthForm"
import { useAuth } from "../context/AuthContext"

const Auth = () => {
  const { signup, login } = useAuth();

  return (
   <>
    <AuthForm title="Login" submitFunction={login} />
    <h4>OR</h4>
    <AuthForm title="Sign up" submitFunction={signup} />
   </>
  )
}

export default Auth