import React, { useEffect, useState, useContext } from 'react';
import './styles/accountstyle.css';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Account = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const mode = location.state?.mode;
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Handle Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    register: regForm,
    handleSubmit: handleRegForm,
    formState: { errors: regError },
    reset: regReset,
  } = useForm();

  useEffect(() => {
    if (mode === 'login') {
      setIsActive(false); 
      setIsRegister(false);
    } else {
      setIsActive(true); 
      setIsRegister(true);
    }
  }, [mode]);

  const toggleAccount = () => {
    setIsRegister((prev) => !prev);
    setIsActive((prev) => !prev);
  };

  const handleLogin = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = existingUsers.find(
      (user) => user.username === data.username && user.password === data.password
    );
    if (validUser) {
      login(validUser);
      alert('Login Successful');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
    reset();
  };

  const handleErrors = (errors) => {
    console.log('Login Errors:', errors);
  };

  const onRegisterSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExist = existingUsers.some(
      (user) => user.username === data.username || user.email === data.email
    );

    if (userExist) {
      alert('Username or Email already Exists');
    } else {
      const updatedUsers = [...existingUsers, data];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Registration Successful');
      setIsRegister(false);
      setIsActive(false);
    }
    regReset();
  };

  const onRegisterError = (errors) => {
    console.log('Registration Errors:', errors);
  };

  return (
    <div className='account-container'>
      <div className={isRegister ? 'hidden' : 'form-box login'}>
        <form onSubmit={handleSubmit(handleLogin, handleErrors)}>
          <h2>Log In</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" 
            {...register('username', {required: 'username is required'})} 
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password"
             {...register('password', {required: 'password is required', minLength:{value: 8, message: 'password must have atleast 8 characters'}})} />
             {errors.password && <p className="error">{errors.password.message}</p>}
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-google"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className={isRegister ? 'form-box register' : 'hidden'}>
        <form onSubmit={handleRegForm(onRegisterSubmit, onRegisterError)}>
          <h2>Register</h2>
          <div className="input-box">
            <input type="text" placeholder="Username"
            {...regForm('username', {required: 'Username is required'})}
            required />
            {regError.username && <p className="error">{regError.username.message}</p>}
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input-box">
            <input type="email" 
            {...regForm('email', {required: 'Email is required'})}
            placeholder="Email"/>
            {regError.email && <p className="error">{regError.email.message}</p>}
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" 
            {...regForm('password', {required: 'Password is Required', minLength: {value: 8, message: 'password must have atleast 8 characters'}})}
            />
            {regError.password && <p className="error">{regError.password.message}</p>}
            <i className="fa-solid fa-lock"></i>
          </div>
          <button type="submit" className="btn">Register</button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-google"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className={`toggle-box ${isActive ? 'goLeft' : 'goRight'}`}>
        
        <div className="toggle-panel">
          <h2>Welcome Back</h2>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={toggleAccount}>Login</button>
        </div>
        <div className="toggle-panel">
          <h2>Hello, Welcome!</h2>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={toggleAccount}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
