import { useNavigate } from "react-router-dom"


const Error = () => {
  const navigate = useNavigate();
  // const condition = true;

  // if (condition) {
  //   return <Navigate to={"/"} />
  // }

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h2>Here be dragons..</h2>
      <button onClick={() => navigate("/", { replace: true })}>Back to safety1</button>
      <button onClick={() => navigate(-1)}>Back to safety2</button>
      
    </div>
  )
}

export default Error