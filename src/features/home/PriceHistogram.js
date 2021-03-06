import React, { Component } from 'react';
import {
  Histogram,
  DensitySeries,
  BarSeries,
  withParentSize,
  XAxis,
  YAxis,
} from '@data-ui/histogram';

const ResponsiveHistogram = withParentSize(({ parentWidth, parentHeight, ...rest }) => (
  <div style={{ height: '50%' }}>
    <Histogram width={parentWidth} height={parentHeight} {...rest} />
  </div>
));

export default class PriceHistogram extends Component {
  static propTypes = {};

  render() {
    const { clusters, displayData } = this.props;
    const prices = clusters.map(c => c[displayData]);
    return (
      <ResponsiveHistogram
        className="home-price-histogram"
        ariaLabel="My histogram of ..."
        orientation="vertical"
        cumulative={false}
        normalized={true}
        binCount={10}
        valueAccessor={datum => datum}
        binType="numeric"
        renderTooltip={({ event, datum, data, color }) => (
          <div>
            <strong style={{ color }}>
              {datum.bin0} to {datum.bin1}
            </strong>
            <div>
              <strong>count </strong>
              {datum.count}
            </div>
            <div>
              <strong>cumulative </strong>
              {datum.cumulative}
            </div>
            <div>
              <strong>density </strong>
              {datum.density.toFixed(2)}
            </div>
          </div>
        )}
      >
        <BarSeries animated rawData={prices.flat() /* or binnedData={...} */} />
        <XAxis />
        <YAxis />
      </ResponsiveHistogram>
    );
  }
}
