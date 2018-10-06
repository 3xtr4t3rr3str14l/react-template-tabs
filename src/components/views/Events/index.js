import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContentCard from '../../ContentCard';

const styles = {};

const Events = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Events">
      Coming Soon!
    </ContentCard>
  );
};

export default withStyles(styles)(Events);
