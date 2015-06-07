import Ember from 'ember';

export default Ember.Controller.extend({
  lineChartData: [],
  interpolationOptions: ['linear', 'monotone'],
  interpolation: 'monotone',
  maxItemsOptions: [2, 5, 10, 50, 100],
  maxItems: 10,
  strokeWidthOptions: [1, 2, 3, 4, 5, 10],
  strokeWidth: 3,

  init: function() {
    this.set('lineChartData', this.getFreshData());
  },

  getFreshData: function() {
    var arr = [],
        maxValue = 1000;

    for(var i = 0; i < this.get('maxItems'); i++) {
      arr.push(Math.ceil(Math.random() * maxValue));
    }

    return arr;
  },

  refresh: function() {
    this.set('lineChartData', this.getFreshData());
  },

  actions: {
    refresh: function() {
      this.refresh();
    }
  }
});
