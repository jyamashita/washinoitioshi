if (typeof wa === 'undefined') {
  wa = {};
  wa.model = {};
}

(function(_) {
  'use strict';
  
  // Template Reactive Data
  Session.setDefault('template.shopDetailModal.dataModel', {});
  Template.shopDetailModal.helpers({
    dataModel: function() {
      console.log('showModalDataChange');
      return Session.get('template.shopDetailModal.dataModel');
    }
  });
  
  _.ShopDetailModal = new function() {
    var self = this;
    
    self.show = function(highlyRecommend) {
      console.debug('modal:' + JSON.stringify(highlyRecommend));
      Session.set('template.shopDetailModal.dataModel', highlyRecommend);
      $('#shopDetailModal').modal();
    };
  };
})(wa.model);
