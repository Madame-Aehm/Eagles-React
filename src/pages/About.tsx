import { NavLink, Outlet } from "react-router-dom"


const About = () => {
  return (
    <>
      <div>
        <NavLink to={"/about/developer"}>Developer</NavLink> {" "}
        <NavLink to={"app"}>App</NavLink>
      </div>
      <h1>This is the about page</h1>
      <Outlet />
    </>
  )
}

export default About