import Ember from 'ember';

export default Ember.Controller.extend({
  bubbleChartData: [],
  interpolationOptions: ['linear', 'monotone'],
  interpolation: 'monotone',
  maxItemsOptions: [10, 50, 100, 1000],
  maxItems: 10,

  init: function() {
    this.set('bubbleChartData', this.getFreshBubbleChartData());
  },

  getFreshBubbleChartData: function() {
    var arr = [],
        maxValue = 1000;

    for(var i = 0; i < this.get('maxItems'); i++) {
      arr.push(Math.ceil(Math.random() * maxValue));
    }

    return arr;
  },

  refresh: function() {
    this.set('bubbleChartData', this.getFreshBubbleChartData());
  },

  actions: {
    refresh: function() {
      this.refresh();
    }
  }
});
