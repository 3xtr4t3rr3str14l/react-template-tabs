import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContentCard from '../../ContentCard';

const styles = {
};

const Swag = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Swag" />
  );
};

export default withStyles(styles)(Swag);
