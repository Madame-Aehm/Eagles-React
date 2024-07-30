import { useRouteError } from "react-router"

const ErrorElement = () => {
  const routeError = useRouteError() as Error;
  return (
    <div>
      <h1>It appears something went wrong...</h1>
      <p>{ routeError.message }</p>
    </div>
  )
}

export default ErrorElement