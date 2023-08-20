import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation and login logic here
    console.log({
      email,
      password
    });

    // Redirect to the Option page
    window.location.href = "/option";
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      <br/><br/><br/>
        <h3>Log In</h3>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Log In
        </Button>
      </form>
      <Link to="/sign-up">Don't have an account? Sign up</Link>
      <br/>
      <br/>
      <br/>
    </Container>
  );
}

export default LoginPage;
