import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Recaptcha from 'react-recaptcha';
import FormControl from '@material-ui/core/FormControl';

import ContentCard from '../../../ContentCard';
import actions from '../../../../actions';

const styles = {
  content: {
    margin: 'auto',
    width: '50%',
    // display: 'grid',
  },
  button: {
    // margin: theme.spacing.unit,
    marginTop: '10px',
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 120,
    paddingBottom: '40px',
  },
};

class ProShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeTextField = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  reCaptchaVerifyCallback = (response) => {
    this.setState({ gRecaptchaResponse: response });
  }

  validate = () => {
    this.props.sendProShopOrderEmail(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <ContentCard title="Pro Shop">
        <form className={classes.form} autoComplete="off">
          <div className={classes.content}>
            <h4>This is the Pro Shop.  Tell us what you want your pipe to look like below.
             Anything goes!</h4>
            <FormControl className={classes.formControl} required>
              <TextField
                id="details"
                label="Pipe Description"
                multiline
                rows="4"
                className={classes.formControl}
                value={this.state.details}
                onChange={this.handleChangeTextField('details')}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="name"
                label="Name"
                className={classes.formControl}
                value={this.state.name}
                onChange={this.handleChangeTextField('name')}
                margin="normal"
              />
              <TextField
                required
                id="email"
                label="Email"
                className={classes.formControl}
                value={this.state.email}
                onChange={this.handleChangeTextField('email')}
                margin="normal"
              />
              <TextField
                required
                id="phoneNumber"
                label="Phone Number"
                className={classes.formControl}
                value={this.state.phoneNumber}
                onChange={this.handleChangeTextField('phoneNumber')}
                margin="normal"
              />
              <Recaptcha
                sitekey="6Ld6Q3QUAAAAABUA1ung_ljZd4pfFzojpVRDMhd1"
                verifyCallback={this.reCaptchaVerifyCallback}
              />
              <br />
              <Button variant="contained" className={classes.button} onClick={() => { this.validate(); }}>
                Submit
              </Button>
            </FormControl>
          </div>
        </form>
      </ContentCard>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendProShopOrderEmail: (formData) => {
    dispatch(actions.sendProShopOrderEmail(formData));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(ProShop));
