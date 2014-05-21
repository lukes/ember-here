Here.MapView = Ember.View.extend({
  didInsertElement: function() {
    // this is required for the map to be rendered
    this.$().css({ width: "100%", height: "150px" });
    // create the LatLng object that will be used to center both the map and the marker
    var center = new google.maps.LatLng(this.get("latitude"),this.get("longitude"));
    // some options
    var options = {
      disableDefaultUI: true,
      center: center,
      zoom: 15,
      scale: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // create the map
    var map = new google.maps.Map(this.$()[0], options);
    // create the marker
    var marker = new google.maps.Marker({ position: center, map: map, draggable: false });
    // save them both for later use
    this.set("marker", marker);
    this.set("map", map);
  },

  willDestroyElement: function() {
    // make sure we clear all listeners
    google.maps.event.clearInstanceListeners(this.get("marker"));
  }

});
