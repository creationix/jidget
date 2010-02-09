// Cross browser implementation of Object.create
// with attributes mixed in.
Object.spawn = function (parent, attributes) {
  var child, key;
  function F () {};
  F.prototype = parent;
  child = new F();
  for (key in attributes) {
    child[key] = attributes[key];
  }
  return child;
}

// Our base class
Jidget = {
  app: {},
  ui: {},
  models: {}
};

