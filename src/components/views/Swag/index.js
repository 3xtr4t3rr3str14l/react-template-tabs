import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContentCard from '../../ContentCard';

const styles = {
};

const Swag = (props) => {
  const { classes } = props;

  return (
    <ContentCard title="Swag">
      <Typography component="p">
        Jewelry<br /><br />
        Shirts<br /><br />
        Hats<br /><br />
        Accessories<br /><br />
        <strong><a href="tel:469-863-6271">Call us</a> or <a href="mailto:wjm3@cawb.com">Email us</a> for pricing/availability.</strong>
      </Typography>
    </ContentCard>
  );
};

export default withStyles(styles)(Swag);
