import Ember from 'ember';

export default Ember.Component.extend({
  height: 200,
  width: 500,
  interpolation: 'monotone',
  data: [],

  x: (function() {
    return d3
      .scale
      .linear()
      .range([0, this.get('width')])
      .domain([0, this.get('data.length') - 1]);
  }).property('data.length', 'width'),

  y: (function() {
    return d3
      .scale
      .linear()
      .range([this.get('height') - 4, 2])
      .domain(d3.extent(this.get('data')));
  }).property('data', 'height'),

  line: (function() {
    var x = this.get('x'),
        y = this.get('y'),
        data = this.get('data'),
        interpolation = this.get('interpolation');

    return d3.svg.line()
      .x(function(d, i) {
        return x(i);
      })
      .y(function(d) {
        return y(d);
      })
      .interpolate(interpolation)(data);
  }).property('x', 'y', 'data', 'interpolation')
});
