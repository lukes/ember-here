Here.Photo = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  longitude: DS.attr(),
  latitude: DS.attr(),
  accuracy: DS.attr(),
  place_id: DS.attr(),
  woeid: DS.attr(),
  media: DS.attr(),
  media_status: DS.attr(),
  url_sq: DS.attr()
});
