Here.ApplicationAdapter = DS.FixtureAdapter.extend();

Here.PhotoAdapter = DS.RESTAdapter.extend({

  findAll: function(store, type, sinceToken) {

    var flickerAPI = "https://api.flickr.com/services/rest?jsoncallback=?";

    return Em.$.ajax({
      url: flickerAPI,
      dataType: "jsonp",
      data: {
        method: "flickr.people.getPublicPhotos",
        api_key: "fb7448aaded0e958cff2f3530e731b75",
        user_id: "65946368@N00",
        per_page: "30",
        page: "1",
        extras: "geo,media,url_q",
        format: "json"
      }
    }).then(function(response) {
      // remove non-geoencoded photos
      // "latitude":0, "longitude":0
      photos = response.photos.photo.rejectBy("latitude", 0)
      return {photos: photos};
    });

  }

});
