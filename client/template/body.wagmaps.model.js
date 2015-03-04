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
      var shop = param.shop;
      var clickCallback = param.clickCallback;
      
      var marker = new google.maps.Marker({
        map : this.map,
        draggable : false,
        position : new google.maps.LatLng(shop.location.lat, shop.location.lng),
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
    self.addMarkers = function(shops) {
      var modal = wa.model.ShopDetailModal;
      self.removeMarkers();
      shops.forEach(function(shop) {
        self.addMarker({
          shop: shop,
          clickCallback: function() { modal.show(shop); }
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
            var shop = {
              name: result.name,
              address: result.formatted_address,
              location: { lat: result.geometry.location.k, lng: result.geometry.location.D }
            };
            self.addMarker({
              shop: shop,
              clickCallback: function() {
                modal.show(shop);
              }
            });
          });
        }
      });
    };
  };
})(wa.model);
