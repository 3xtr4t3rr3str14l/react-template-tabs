import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Recaptcha from 'react-recaptcha';

import ContentCard from '../../../ContentCard';
import actions from '../../../../actions';

const styles = {
  content: {
    margin: 'auto',
    width: '50%',
  },
  form: {
    display: 'grid',
    flexWrap: 'wrap',
    paddingBottom: '40px',
  },
  formControl: {
    minWidth: 120,
    paddingBottom: '40px',
  },
  textField: {
    width: 200,
  },
  reCaptcha: {
    margin: 'auto',
  },
};

class CustomPipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: '',
      color: '',
      raw: false,
      naturalstain: false,
      clearcoat: false,
    };
  }

  handleChangeDropDown = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheck = name => (event) => {
    this.setState({ [name]: event.target.checked });
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
    this.props.sendCustomOrderEmail(this.state);
  }

  render() {
    const { classes } = this.props;
    const { raw, naturalstain, clearcoat } = this.state;

    return (
      <ContentCard title="Custom Pipes">
        <div className={classes.content}>
          <form className={classes.form} autoComplete="off">
            <h3>Pipe Order Details</h3>
            <FormControl className={classes.formControl} required>
              <InputLabel htmlFor="length-simple">Pipe length</InputLabel>
              <Select
                value={this.state.length}
                onChange={this.handleChangeDropDown}
                inputProps={{
                  name: 'length',
                  id: 'length-simple',
                }}
              >
                <MenuItem value={'small'}>Small (12 - 16 inches)</MenuItem>
                <MenuItem value={'medium'}>Medium (16 - 22 inches)</MenuItem>
                <MenuItem value={'large'}>Large (18 - 28 inches)</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl} required>
              <InputLabel htmlFor="color-simple">Wood Bowl Color</InputLabel>
              <Select
                value={this.state.color}
                onChange={this.handleChangeDropDown}
                inputProps={{
                  name: 'color',
                  id: 'color-simple',
                }}
              >
                <MenuItem value={'oak'}>Oak</MenuItem>
                <MenuItem value={'redwood'}>Redwood</MenuItem>
                <MenuItem value={'black'}>Black</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <FormLabel component="legend">Pipe Finish</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox checked={raw} onChange={this.handleCheck('raw')} value="raw" />
                }
                label="Raw"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={naturalstain} onChange={this.handleCheck('naturalstain')} value="naturalstain" />
                }
                label="Natural Stain"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={clearcoat} onChange={this.handleCheck('clearcoat')} value="clearcoat" />
                }
                label="Clear Coat"
              />
              <br />
              <h3>Contact Info</h3>
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
              <br />
              <div className={classes.reCaptcha}>
                <Recaptcha
                  sitekey="6Ld6Q3QUAAAAABUA1ung_ljZd4pfFzojpVRDMhd1"
                  verifyCallback={this.reCaptchaVerifyCallback}
                />
              </div>
            </FormControl>
          </form>
          <Button variant="contained" className={classes.button} onClick={() => { this.validate(); }}>
            Submit
          </Button>
        </div>
      </ContentCard>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendCustomOrderEmail: (formData) => {
    dispatch(actions.sendCustomOrderEmail(formData));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(CustomPipes));
