'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#121212',
});

const FormBox = styled(Box)({
  backgroundColor: '#1e1e1e',
  padding: '2rem',
  borderRadius: '8px',
  width: '300px',
  textAlign: 'center',
});

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async() => {
    console.log('Login:', { email, password });
    setError(null);
    try {
      const response = await fetch('https://final-rudra.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log('Login successful');
        console.log(response.json());
        router.push('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error logging in for user');
      }
    } catch (error) {
      setError('Error logging in for user');
    }
  };

  return (
    <Container>
      <FormBox>
        <Typography variant="h5" component="h1" mb={2} color="primary">Login</Typography>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: { color: '#e0e0e0' }, // Text color
          }}
          InputLabelProps={{
            style: { color: '#e0e0e0' }, // Label color
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: { color: '#e0e0e0' }, // Text color
          }}
          InputLabelProps={{
            style: { color: '#e0e0e0' }, // Label color
          }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
        <Box mt={2}>
          <Button variant="text" color="primary">
            <Link href="/signup">Signup</Link>
          </Button>
        </Box>
        <Box mt={2}>
          <Link href="/forgot-password">Forgot Password?</Link>
        </Box>
      </FormBox>
    </Container>
  );
};

export default LoginPage;
