import React from 'react';
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

import ContentCard from '../../../ContentCard';

const styles = {
  content: {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    paddingBottom: '40px',
  },
  title: {
    textAlign: 'center',
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

  render() {
    const { classes } = this.props;
    const { raw, naturalstain, clearcoat } = this.state;

    return (
      <ContentCard>
        <div className={classes.content}>
          <h2 className={classes.title}>Custom Pipes</h2>
          <form className={classes.form} autoComplete="off">
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
                {
                  // <MenuItem value="">
                  //   <em>None</em>
                  // </MenuItem>
                }
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
                {
                  // <MenuItem value="">
                  //   <em>None</em>
                  // </MenuItem>
                }
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
            </FormControl>
            {
              // <div>Pipe Finish</div>
            }
          </form>
          <Button variant="contained" className={classes.button}>
            Submit
          </Button>
        </div>
      </ContentCard>
    );
  }
}

export default withStyles(styles)(CustomPipes);
