import { Container, Box, Avatar, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginForm from "../components/form/LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogedIn } from "../redux/action";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const staticEmail = 'satul388@gmail.com';
    const staticPassword = '1234567890';


    const [loginInputContext, setLoginInputContext] = useState({
        username: "",
        password: ""
    })

    function handleEditLoginInputContext(e) {
        setLoginInputContext({
            ...loginInputContext,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        const len = password.length;
        return len >= 6 && len <= 15;
    }

    function handleResetLoginForm() {
        setLoginInputContext({
            username: "",
            password: ""
        })
      }

    async function submitLoginForm(e) {
        e.preventDefault()

        let err_item = []
        if (!loginInputContext.username) err_item.push("Username")
        if (!loginInputContext.password) err_item.push("Password")

        if (err_item.length > 0) {
            return alert(`${err_item.join(', ')} must not be BLANK`)
        }

        if(!isValidEmail(loginInputContext.username)) err_item.push("Invalid Username");
        if(!isValidPassword(loginInputContext.password)) err_item.push("Password must be of length 6 to 15 characters");

        if (err_item.length > 0) {
            return alert(`${err_item.join(', ')}`)
        }

        if (loginInputContext.username === staticEmail && loginInputContext.password === staticPassword) {
            handleResetLoginForm();
            localStorage.setItem('isLoggedIn', true);
            navigate('/home');
        } else {
            alert('Invalid Credential')
        }
        
    }

  return (
      <React.Fragment>
          <Container component="section" maxWidth="sm">
          <Box
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Typography component="h1" variant="h5">
                  Login
              </Typography>

              <LoginForm
                  username={loginInputContext.username}
                  password={loginInputContext.password}
                  onChange={handleEditLoginInputContext}
                  onSubmit={submitLoginForm}
              />
          </Box>
          </Container>
      </React.Fragment>
  );
}

export default LoginPage;