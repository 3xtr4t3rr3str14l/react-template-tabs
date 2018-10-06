import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContentCard from '../../ContentCard';

const styles = {};

const Contact = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Contact" />
  );
};

export default withStyles(styles)(Contact);
