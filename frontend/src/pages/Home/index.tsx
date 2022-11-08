import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <HomeSlider />
      </Box>
    </>
  )
}

export default HomePage