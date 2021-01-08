import React, { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './form/Form';
import List from './list/List';
import InfoCard from '../InfoCard';

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by speechly' />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance R{balance}
        </Typography>
        <Typography
          variant='subtitle1'
          style={{ lineHeight: '1.5rem', marginTop: '20px' }}
        >
          <InfoCard />
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
