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

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleForgotPassword = () => {
    console.log('Forgot Password:', { email });
    // Add logic for password reset
  };

  return (
    <Container>
      <FormBox>
        <Typography variant="h5" component="h1" mb={2} color="primary">Forgot Password</Typography>
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
        <Button variant="contained" color="primary" fullWidth onClick={handleForgotPassword}>
          Reset Password
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

export default ForgotPasswordPage;
