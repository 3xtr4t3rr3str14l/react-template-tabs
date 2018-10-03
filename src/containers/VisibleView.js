import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from '../components/views/Home';

const View = ({ viewType }) => (
  (viewType)
);

View.propTypes = {
  viewType: PropTypes.element.isRequired,
};

const viewList = {
  HOME: (<Home />),
  ABOUT: (<div>ABOUT</div>),
  PIPES: (<div>PIPES</div>),
  SWAG: (<div>SWAG</div>),
  CONTACT: (<div>CONTACT</div>),
  EVENTS: (<div>EVENTS</div>),
  GALLERY: (<div>GALLERY</div>),
};

const getVisibleView = (filter) => {
  const viewType = viewList[filter];
  return viewType;
};

const mapStateToProps = (state) => {
  const visibleView = getVisibleView(state.visibilityFilter);
  return {
    viewType: visibleView,
  };
};

const VisibleView = connect(
  mapStateToProps,
  null,
)(View);

export default VisibleView;
