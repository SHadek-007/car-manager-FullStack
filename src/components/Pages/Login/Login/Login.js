import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import logo from '../../../../images/logo.png';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  useEffect(()=>{
    if (user) {
        navigate(from, { replace: true });
      };
  })
  
  if (loading || sending) {
    return <Loading></Loading>;
  };

  

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const navigateToRegister = (e) => {
    navigate("/register");
  };
  const resetPassword = async () => {
    if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }else{
        toast('Please Enter Your Email Address');
      }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
    return (
        <div className="login-container p-4 rounded">
      <div className="text-center mb-4">
        <img className="w-50 bg-danger" src={logo} alt="" />
      </div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          variant="danger"
          className="w-50 d-block mx-auto fs-5"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className="mt-3">
        New to car manager?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={navigateToRegister}
        >
          Please Register
        </span>
      </p>
      <p className="mt-3">
        Forget Password?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={resetPassword}
        >
          Reset Password
        </span>
      </p>
      {errorElement}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;