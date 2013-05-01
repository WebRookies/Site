window.App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 4,
  adapter: DS.fixtureAdapter
});

App.Router.map(function() {
  this.resource('posts');
  this.resource('tutorials');
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Learn to code!");
  }
});

App.IndexController = Ember.Controller.extend({
  appName: 'Web Rookies'
});

App.PostsController = Ember.Controller.extend({
    model: function() {
      return App.Post.find();
    }
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  intro: DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date')
});

App.Post.FIXTURES = [{
  "id": 1,
  "title": "test 1",
  "author": "david",
  publishedAt: new Date('05-01-2013'),
  intro: "asdfasdfafadfgagagaereghadfgasgasdfasdfasdgadfhadgasdfsadfds",
  extended: "asdfasdfafadfgagagaereghadfgasgasdfasdfasdgadfhadgasdfsadfdsasdfasdfasdfasgadfgadfgadfgdfgdsfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgdsf"
}, {
  "id": 2,
  "title": "test 2",
  "author": "pierce",
  publishedAt: new Date('05-02-2013'),
  intro: "asdfasdfafadfgagagaereghadfgasgasdfasdfasdgadfhadgasdfsadfds",
  extended: "asdfasdfafadfgagagaereghadfgasgasdfasdfasdgadfhadgasdfsadfdsasdfasdfasdfasgadfgadfgadfgdfgdsfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgdsf"
}];