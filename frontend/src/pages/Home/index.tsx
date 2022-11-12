import * as React from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw'
        }}>
        <HomeSlider />
        <Link to="/login">
          <Button variant="outlined" color="info">
            Comenzar
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default HomePage;
