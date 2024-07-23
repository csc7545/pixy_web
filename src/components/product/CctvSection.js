import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import cctvImg from '../../assets/home_sample3.png';

const CCTVSection = () => {
    const isLargeScreen = useMediaQuery('(min-width:1920px)');
  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1920px',
        mx: 'auto',
        px: {
          xs: '5vw',
          sm: '7vw',
          md: '9vw',
          lg: isLargeScreen ? '340px' : 'calc((100vw - 1240px) / 2)',
        } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={cctvImg} alt="CCTV" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            CCTV Section
          </Typography>
          <Typography variant="body1" paragraph>
            - 이상행동 분류 모델을 통해 매장 내 이상행동 탐지
          </Typography>
          <Typography variant="body1" paragraph>
            - 화재 감지를 통한 매장안전 강화
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CCTVSection;
