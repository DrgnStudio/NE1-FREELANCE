import '@styles/members/members.css'
import LoginComponent from '@components/auth/login/LoginComponent';
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Login - NE1-FREELANCE'
}
export default function LoginPage(){
  return  (
    <>
      <head>
        <title>Login</title>
      </head>
      <LoginComponent />
    </>
  )
}

