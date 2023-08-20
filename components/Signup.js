import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';



function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation and signup logic here
    console.log({
      username,
      email,
      password,
      name
    });

    // Redirect to the Option page
    window.location.href = "/option";
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      <br/><br/><br/>
      <h3>Sign Up</h3>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <TextField
          label="Confirm Password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setName(e.target.value)}
          required
          type="password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Link to="/sign-in">Already have an account? Log in</Link>
      <br/><br/><br/>
    </Container>
  );
}

export default SignupPage;
