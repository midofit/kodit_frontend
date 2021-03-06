import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import BuildingProfile from './BuildingProfile';

export default class BuildingPopover extends Component {
  static propTypes = {};

  render() {
    const { id, open, anchorEl, handleClose, selectedApartment } = this.props;
    return (
      <Popover
        className="home-building-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <BuildingProfile {...selectedApartment} />
      </Popover>
    );
  }
}
