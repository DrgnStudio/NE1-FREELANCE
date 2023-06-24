import '../../static/css/members/members.css'
import GlobalNavbar from '../GlobalNavbar'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerRoute } from "../utils/APIRoutes";

export default function Signup({currentUser}){

  const [message, setMessage] = useState("");
 
  const navigate = useNavigate()
  if(currentUser) navigate('/jobs/search')

    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  
    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
  
    const handleValidation = () => {
      console.log('validating')
      const { password, confirmPassword, username, email } = values;
      
      if (username == '') {
        console.log("Enter your username")
        setMessage("Enter your username")
        return console.log("Enter your username")
      }
      if (email == '') {
        console.log("Enter your email")
        setMessage("Enter your email")
        return console.log("Enter your email")
      }
      if (password == '') {
        console.log("Enter your password")
        setMessage("Enter your password")
        return console.log("Enter your password")
      }
      if (confirmPassword == '') {
        console.log("Please confirm your password")
        setMessage("Please confirm your password")
        return console.log("Please confirm your password")
      }
      console.log(password)
      if (confirmPassword !== password) {
          setMessage(
            'Passwords must match'
          )
        return false;
      } else if (username.length < 3) {
          "Username should be greater than 3 characters.",
          setMessage(
          "Username should be greater than 3 characters.",
          )
        return false;
      } else if (password.length < 8) {
        setMessage(
          "Password should be equal or greater than 8 characters.",
          )
        return false;
      } else if (email === "") {
        setMessage("Email is required.");
        return false;
      }
  
      return true;
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (handleValidation()) {
        console.log('passed validation')
        const { email, username, password } = values;
        const { data } = await axios.post(registerRoute, { username, email, password}, {withCredentials: true});

        if(!data.status){
          console.log(data.error)
          setMessage(data.error)
          return
        }
        sessionStorage.setItem('user', JSON.stringify(data.user))
        window.location.href = "/jobs/search";
      }
    };
  

  return (
    <>
        {!currentUser && (currentUser == undefined || currentUser == null) && (
          <>
          <GlobalNavbar currentUser={currentUser}/>
                <main className="signup-main-container">
                  <form className="signupForm" onSubmit={handleSubmit}>
                  
                  {message ? (
                      <div className="alert alert-warning alert-dismissible fade show" role="alert">
                              <strong><i className="fa-solid fa-triangle-exclamation"></i>{message}</strong>
                              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div> 
                    ) : null
                  }

                  

                    <h1 className="signup-header">Sign up</h1>

                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username:</label>
                      <input type="text" className="form-control inputs" id="username" name="username" placeholder="John Doe"
                        onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email:</label>
                      <input type="email" className="form-control inputs" id="email" name="email" placeholder="example@example.com"
                        onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password1" className="form-label">Password</label>
                      <input type="password" className="form-control inputs" id="password1" name="password" placeholder="********"
                        onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password2" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control inputs" id="password2" name="confirmPassword" placeholder="********"
                        onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="col-12">
                      <p className="link">Already a member?
                        <Link to='/members/login'>Login</Link>
                      </p>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary submit-btn" type="submit">Sign up</button>
                    </div>

                  </form>
              </main>
          </>
        )}
    </>
  
  )
}
