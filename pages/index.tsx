import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Link from '../components/Link';

const Home: NextPage = () => {
  return (
    <div>
      <AppBar sx={{ mb: 5 }} variant="outlined" position="static">
        <Toolbar>
          <Typography
            sx={{ fontFamily: 'Roboto Mono' }}
            variant="h5"
            color="inherit"
            component="div"
          >
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Link underline="none" href="/about">
          Go to about page
        </Link>
      </Container>
    </div>
  );
};

export default Home;
