Here.PhotosRoute = Ember.Route.extend({

  // controllerName: 'photos',

  // admittedly, this should be in IndexRoute and not in the
  // // top level ApplicationRoute; we're in transition... :-)
  model: function() {
    // return ['red', 'yellow', 'blue'];
    // return this.store.find('photo');
    this.store.find('photo');

    // Create a filter for all favorited posts that will be displayed in
    // the template. Any favorited posts that are already in the store
    // will be displayed immediately;
    // Kick off a query to the server for all posts that
    // the user has favorited. As results from the query are
    // returned from the server, they will also begin to appear.
    return this.store.filter('photo', { media: 'photo' }, function(photo) {
      return photo.get('media') == 'photo';
    });
  },

  // setupController: function(controller, model) {
    // controller.set('model', this.)
    // this._super(controller, model);
    // controller.set('content', ['red', 'yellow', 'blue']);
  // }

});
