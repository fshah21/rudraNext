'use client';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
});

const DashboardBox = styled(Box)({
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
  textAlign: 'center',
});

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <DashboardBox>
        <Typography variant="h4" component="h1" mb={2}>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="body1" component="p">
          This is your personalized dashboard. Here you can manage your account, view statistics, and more.
        </Typography>
      </DashboardBox>
    </Container>
  );
};

export default DashboardPage;
