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
    // margin: theme.spacing.unit,
    minWidth: 120,
    paddingBottom: '40px',
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheck = name => (event) => {
    this.setState({ [name]: event.target.checked });
  }

  reCaptchaVerifyCallback = (response) => {
    this.setState({ gRecaptchaResponse: response });
  };

  render() {
    const { classes } = this.props;
    const { raw, naturalstain, clearcoat } = this.state;

    return (
      <ContentCard title="Custom Pipes">
        <div className={classes.content}>
          <form className={classes.form} autoComplete="off">
            <h3>Pipe Order Details</h3>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="length-simple">Pipe length</InputLabel>
              <Select
                value={this.state.length}
                onChange={this.handleChange}
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
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="color-simple">Wood Bowl Color</InputLabel>
              <Select
                value={this.state.color}
                onChange={this.handleChange}
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
              <Recaptcha
                sitekey="6Ld6Q3QUAAAAABUA1ung_ljZd4pfFzojpVRDMhd1"
                verifyCallback={this.reCaptchaVerifyCallback}
              />
            </FormControl>
          </form>
          <br />
          <Button variant="contained" className={classes.button} onClick={() => { this.props.sendMail(this.state); }}>
            Submit
          </Button>
        </div>
      </ContentCard>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendMail: (formData) => {
    dispatch(actions.sendMail(formData));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(CustomPipes));
