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

const Swag = (props) => {
  const { classes } = props;

  return (
    <ContentCard>
      <div className={classes.content}>
        <h2 className={classes.title}>Swag</h2>
      </div>
    </ContentCard>
  );
};

export default withStyles(styles)(Swag);
