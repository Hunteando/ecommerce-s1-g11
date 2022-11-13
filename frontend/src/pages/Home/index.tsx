import * as React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
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
          width: '100%',
          marginTop: '10px',
        }}
      >
        <HomeSlider />
      </Box>
    </>
  );
};

export default HomePage;
