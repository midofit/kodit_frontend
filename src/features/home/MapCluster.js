import React, { Component } from 'react';
import { Marker } from 'react-map-gl';
import MarkerIcon from '@material-ui/icons/LocationOn';
import BuildingPopover from './BuildingPopover';

export default class MapCluster extends Component {
  static propTypes = {};
  state = {
    anchorEl: null,
    selectedApartment: {},
  };

  openPopover(marker, event) {
    this.setState({
      anchorEl: event.currentTarget,
      selectedApartment: marker,
    });
  }

  closePopover() {
    this.setState({ anchorEl: null, selectedApartment: {} });
  }

  render() {
    const { anchorEl, selectedApartment } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : null;
    return (
      <div className="home-map-cluster">
        {this.props.clusters.map(marker => (
          <Marker
            key={marker['Unnamed: 0']}
            longitude={marker.longitude}
            latitude={marker.latitude}
          >
            <div onClick={this.openPopover.bind(this, marker)}>
              <MarkerIcon />
            </div>
          </Marker>
        ))}
        <BuildingPopover
          open={open}
          id={id}
          anchorEl={anchorEl}
          handleClose={this.closePopover.bind(this)}
          selectedApartment={selectedApartment}
        />
      </div>
    );
  }
}
