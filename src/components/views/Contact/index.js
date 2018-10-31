import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContentCard from '../../ContentCard';
import fbLogo from '../../../images/fbLogo.png';
import twitterLogo from '../../../images/twitterLogo.png';
import phoneIcon from '../../../images/phoneIcon.png';
import emailIcon from '../../../images/emailIcon.png';

const styles = {
  icon: {
    size: '20px',
    marginLeft: '20px',
    marginRight: '20px',
  },
};

const Contact = (props) => {
  const { classes } = props;
  const iconSize = '42';

  return (
    <ContentCard title="Contact">
      <Typography component="p">
        <strong><p>Contact us through email, phone, Facebook or Twitter</p></strong>
        <br />
        <a href="mailto:wjm3@cawb.com"><img className={classes.icon} height={iconSize} width={iconSize} src={emailIcon} alt="Email Icon" /></a>
        <a href="tel:469-863-6271"><img className={classes.icon} height={iconSize} width={iconSize} src={phoneIcon} alt="Phone Icon" /></a>
        <a href="https://www.facebook.com/theoriginalpookaairbong/"><img className={classes.icon} height={iconSize} width={iconSize} src={fbLogo} alt="Facebook Logo" /></a>
        <a href=""><img className={classes.icon} height={iconSize} width={iconSize} src={twitterLogo} alt="Twitter Logo" /></a>
      </Typography>
    </ContentCard>
  );
};

export default withStyles(styles)(Contact);
