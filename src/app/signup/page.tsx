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

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async () => {
    setError(null);
    try {
      const response = await fetch('https://final-rudra.vercel.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });
      if (response.ok) {
        console.log('Signup successful');
        router.push('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error creating user');
      }
    } catch (error) {
      setError('Error creating user');
    }
  };

  return (
    <Container>
      <FormBox>
        <Typography variant="h5" component="h1" mb={2} color="primary">Signup</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          Signup
        </Button>
        <Box mt={2}>
          <Button variant="text" color="primary">
            <Link href="/login">Back to Login</Link>
          </Button>
        </Box>
      </FormBox>
    </Container>
  );
};

export default SignupPage;
