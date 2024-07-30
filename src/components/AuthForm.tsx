import React, { useState } from 'react'

type Props = {
  title: string
  submitFunction: (email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>) => void
}

const AuthForm = ({ title, submitFunction }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    console.log(email, password);
    submitFunction(email, password, setError);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>{ title }</h1>
      <input type="email" placeholder="Enter your email" value={email} onChange={handleEmail} />
      <input type="password" placeholder="Enter a password" value={password} onChange={handlePassword} />
      <button type="submit">{ title }</button>
      <p style={{ color: "red"}}>{ error }</p>
    </form>
  )
}

export default AuthForm