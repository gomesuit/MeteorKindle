Meteor.publish('posts', function() {
  return Posts.find({}, {limit: 100});
});
