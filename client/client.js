HighlyRecommends = new Mongo.Collection("highlyrecommends");
sGMaps = null;
rGMaps = null;

(function() {
  'use strict';

  console.log('load: client.js');
  
  // 変数
  Session.setDefault('searchText', '');
  Session.setDefault('mode', 'search');
  Session.setDefault('init', false);
  
  Meteor.startup(function() {
    // gMaps = new wa.model.WaGoogleMaps();
    sGMaps = new wa.model.WaGoogleMaps({ selector: '#search-panel .map-camvas' });
    rGMaps = new wa.model.WaGoogleMaps({ selector: '#regist-panel .map-camvas' });
  });
  
  //
  Template.body.helpers({
    mode: function(check) {
      return Session.equals('mode', check);
    }
  });
  
  Template.body.events({
    'click #select-search a': function() {
      Session.set('mode', 'search');
    },
    'click #select-regist a': function() {
      Session.set('mode', 'regist');
    }
  });
  
  //
  Template.searchCtl.helpers({
    
    searchResult : function() {
      if (Session.get('searchCtl.searchText')) {
        var selector = {};
        selector['introduce'] = new RegExp(Session.get('searchCtl.searchText'));
        console.log('find' + selector['introduce']);
        var searchResult = HighlyRecommends.find(selector);
        if (searchResult == null || searchResult.mode) return;
        if (0 < searchResult.count()) {
        　var highlyRecommends = searchResult.fetch();
          sGMaps.addMarkers(highlyRecommends);
          return highlyRecommends;
        } else {
          sGMaps.removeMarkers();
        }
      }
      sGMaps.removeMarkers();
      return [];
    }
  });
  
  Template.registCtl.helpers({
    searchResult : function() {
      if (Session.get('registCtl.searchText')) {
        var selector = {};
        selector['introduce'] = new RegExp(Session.get('registCtl.searchText'));
        console.log('find' + selector['introduce']);
        var searchResult = HighlyRecommends.find(selector);
        if (searchResult == null || searchResult.mode) return;
        if (0 < searchResult.count()) {
          var highlyRecommends = searchResult.fetch();
          rGMaps.addMarkers(highlyRecommends);
          return highlyRecommends;
        } else {
          rGMaps.removeMarkers();
        }
      }
      rGMaps.removeMarkers();
      return [];
    }
  });
  
  Template.searchCtl.events({
    'submit .searchShop form': function(event) {
      var text = event.target.searchText.value;
      Session.set('searchCtl.searchText', text);
      console.log('search:' + text);
      return false;
    }
  });
  
  Template.registCtl.events({
    'submit .searchShop form': function(event) {
      var text = event.target.searchText.value;
      // Session.set('registCtl.searchText', text);
      console.log('search:' + text);
      rGMaps.search(text);
      return false;
    }
  }); 
 
})();

