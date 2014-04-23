Here.ApplicationAdapter = DS.FixtureAdapter.extend();

Here.PhotoAdapter = DS.RESTAdapter.extend({

  findAll: function(store, type, sinceToken) {

    var flickerAPI = "http://api.flickr.com/services/rest?jsoncallback=?";

    return Em.$.ajax({
      url: flickerAPI,
      dataType: "jsonp",
      data: {
        method: "flickr.people.getPublicPhotos",
        api_key: "6e83193374827994bec62c2baefffa8c",
        user_id: "65946368@N00",
        per_page: "30",
        page: "1",
        extras: "geo,media,url_q",
        format: "json"
      }
    }).then(function(response) {
      return {photos: response.photos.photo};
    });

  }

});
