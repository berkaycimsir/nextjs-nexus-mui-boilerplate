import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from '../components/Link';
import { decrement, increment, selectCount } from '../store/reducers/counter';

const Home: NextPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <AppBar sx={{ mb: 5 }} elevation={0} variant="outlined" position="static">
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

      <Container maxWidth="md">
        <Typography variant="h3">{count}</Typography>
        <Button onClick={() => dispatch(increment())} variant="contained">
          Increment
        </Button>
        <Button
          onClick={() => dispatch(decrement())}
          color="secondary"
          sx={{ ml: 2 }}
          variant="contained"
        >
          Decrement
        </Button>
        <Link display="block" mt={10} underline="none" href="/about">
          Go to about page
        </Link>
      </Container>
    </div>
  );
};

export default Home;
