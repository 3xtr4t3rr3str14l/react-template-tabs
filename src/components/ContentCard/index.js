import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
  mainCard: {
    margin: 'auto',
    width: '85%',
    background: 'rgb(255, 255, 255, 0.4)',
    textAlign: 'center',
    paddingBottom: '40px',
    fontFamily: 'RavieFont',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'RavieFont',
  },
};

const ContentCard = (props) => {
  const { classes } = props;

  return (<Card style={styles.mainCard}>
    <h2 className={classes.title}>{props.title}</h2>
    {props.children}
  </Card>
  );
};

export default withStyles(styles)(ContentCard);
