import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContentCard from '../../ContentCard';

const styles = {
  content: {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    paddingBottom: '40px',
  },
  title: {
    textAlign: 'center',
  },
};

const Events = (props) => {
  const { classes } = props;

  return (
    <ContentCard>
      <div className={classes.content}>
        <h2 className={classes.title}>Events</h2>
        Coming Soon!
      </div>
    </ContentCard>
  );
};

export default withStyles(styles)(Events);
