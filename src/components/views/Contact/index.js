import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContentCard from '../../ContentCard';
import fbLogo from '../../../images/fbLogo.png';
import twitterLogo from '../../../images/twitterLogo.png';

const styles = {
  icon: {
    size: '20px',
  },
};

const Contact = (props) => {
  const { classes } = props;
  const iconSize = '42';

  return (
    <ContentCard title="Contact">
      <Typography component="p">
        <a href="mailto:wjm3@cawb.com">wjm3@cawb.com</a><br /><br />
        <a href="tel:469-863-6271">469-863-6271</a><br /><br />
        <a href="https://www.facebook.com/theoriginalpookaairbong/"><img className={classes.icon} height={iconSize} width={iconSize} src={fbLogo} alt="Facebook Logo" /></a><br /><br />
        <a href=""><img className={classes.icon} height={iconSize} width={iconSize} src={twitterLogo} alt="Twitter Logo" /></a><br /><br />
      </Typography>
    </ContentCard>
  );
};

export default withStyles(styles)(Contact);
