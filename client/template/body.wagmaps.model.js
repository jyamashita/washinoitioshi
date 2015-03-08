if (typeof wa === 'undefined') {
  wa = {};
  wa.model = {};
}

(function(_) {
  'use strict';
  
  Session.setDefault('template.waGoogleMaps.dataModel', {});
  
  _.WaGoogleMaps = function(param) {
    var self = this;
    
    self.map = null;
    self.service = null;
    self.markers = [];
    
    init(param);
    
    /**
     * Init
     */
    function init(prm) {
      self.map = new google.maps.Map($(prm.selector)[0], {
        zoom : 14,
        center : new google.maps.LatLng(35.681791, 139.764737),
        mapTypeId : google.maps.MapTypeId.LOADMAP,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
      });
      
      self.service = new google.maps.places.PlacesService(self.map);
    }
    
    /**
     * Add Marker
     * @param {Object} param
     */
    self.addMarker = function(param) {
      console.log('do addMarker: [param:' + JSON.stringify(param) + ']');
      console.log('do addMarker: [loc:' + JSON.stringify(param.highlyRecommend.loc[1]) + ']');
      
      var highlyRecommend = param.highlyRecommend;
      var clickCallback = param.clickCallback;
      
      var marker = new google.maps.Marker({
        map : this.map,
        draggable : false,
        position : new google.maps.LatLng(highlyRecommend.loc[0], highlyRecommend.loc[1]),
      });
      this.markers.push(marker);
      
      // click event
      google.maps.event.addListener(marker, 'click', clickCallback);
    };
    
    /**
     * Remove Markers
     */
    self.removeMarkers = function() {
      console.log('do removeMarkers');
      self.markers.forEach(function(marker) {
        marker.setMap(null);
      });
      self.markers = [];
    };
    
    /**
     * 
     */
    self.addMarkers = function(highlyRecommends) {
      var modal = wa.model.ShopDetailModal;
      self.removeMarkers();
      highlyRecommends.forEach(function(highlyRecommend) {
        self.addMarker({
          highlyRecommend: highlyRecommend,
          clickCallback: function() { modal.show(highlyRecommend); }
        });
      });
    };
    
    /**
     * 
     */
    self.search = function(text) {
      var modal = wa.model.ShopDetailModal;
      self.service.textSearch({ query: text }, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          self.removeMarkers();
          results.forEach(function(result) {
            console.debug('google map search:' + JSON.stringify(result));
            var highlyRecommend = {
              name: result.name,
              address: result.formatted_address,
              loc: [ result.geometry.location.k, result.geometry.location.D ]
            };
            self.addMarker({
              highlyRecommend: highlyRecommend,
              clickCallback: function() {
                modal.show(highlyRecommend);
              }
            });
          });
        }
      });
    };
  };
})(wa.model);
