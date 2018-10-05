import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ContentCard from '../../../ContentCard';

const styles = {
  content: {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    display: 'grid',
    paddingBottom: '40px',
  },
  title: {
    textAlign: 'center',
  },
  button: {
    // margin: theme.spacing.unit,
  },
};

const ProShop = (props) => {
  const { classes } = props;

  return (
    <ContentCard>
      <div className={classes.content}>
        <h2 className={classes.title}>Pro Shop</h2>
        <h4>This is the Pro Shop.  Tell us what you want your pipe to look like below.
        Anything goes!</h4>
        <TextField
          id="outlined-multiline-static"
          label="Type Here"
          multiline
          rows="4"
          // defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" className={classes.button}>
          Submit
        </Button>
      </div>
    </ContentCard>
  );
};

export default withStyles(styles)(ProShop);
