import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import logo from "../../../../images/logo.png";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sendError] =
    useSendPasswordResetEmail(auth);

  useEffect(() => {
    if (user) {
      fetch("https://car-manager007.herokuapp.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
        });
      navigate(from, { replace: true });
    }
  }, [user]);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  let errorElement;

  if (error || sendError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message || sendError?.message}
        </p>
      </div>
    );
  }

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
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-container p-4 rounded bg-light shadow">
      <div className="text-center mb-4">
        <img className="w-50 log-bg py-2 rounded" src={logo} alt="" />
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
        <button
          className="w-50 d-block mx-auto fs-5 button-style"
          type="submit"
        >
          Login
        </button>
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
          onClick={() => resetPassword()}
        >
          Reset Password
        </span>
      </p>
      {errorElement}
      <SocialLogin></SocialLogin>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
