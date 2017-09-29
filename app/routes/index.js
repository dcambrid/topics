const topicRoutes = require('./topic_routes');
module.exports = function(app, db) {
  topicRoutes(app, db);
  // Other route groups could go here, in the future
};
