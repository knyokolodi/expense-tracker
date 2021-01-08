import { Grid } from '@material-ui/core';
import {
  PushToTalkButtonContainer,
  PushToTalkButton,
  ErrorPanel,
} from '@speechly/react-ui';
import React from 'react';
import Details from './components/details/Details';
import Main from './components/main/Main';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4} className='classes.mobile'>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={3} className='classes.main'>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className='classes.last'>
          <Details title='Expense' />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </>
  );
};

export default App;
