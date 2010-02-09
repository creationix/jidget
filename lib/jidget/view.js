Jidget.View = {
  el              : null,   // Reference to the root dom element
  callbacks       : {},     // ?
  modes           : {},     // Stored various states
  model           : null,   // Data Model
  className       : 'view', // css class name of root element
  tagName         : 'div',  // tag type of root element
  id              : null,   // css id of root element

  initialize: function () {
    if (this.el) {
      this.el.empty();
    } else {
      this.el = $(document.createElement(this.tagName)).attr({
        id: this.id,
        className: this.className
      });
    }
  },

  // This needs to be overridden in each view.
  render: function() {
    return this;
  },

  children: function() {
    return [];
  },

  // Makes the view enter a mode. Modes have both a 'state' and a 'group',
  // and are mutually exclusive with any other states in the same group.
  // Setting will update the view's modes hash, as well as set an HTML className
  // of [state]_[group] on the view's element. Convenient way to swap styles
  // and behavior.
  setMode : function(state, group) {
    // Change the css
    group = group || 'mode';
    var re = new RegExp("(\\w+_" + group + ")\\b", 'g');
    var mode = (state === null) ? "" : state + "_" + group;
    var name = this.el.className.replace(re, '') + ' ' + mode;
    name = name.replace(/\s\s/g, ' ');
    this.el.className = name;
    // Change the hash in memory too
    this.modes[group] = state;
  },

  // Set callbacks, where this.callbacks is an array of [CSS-selector,
  // event-name, callback-name] triplets. Callbacks will be bound to the view,
  // with 'this' set properly. Passing a selector of 'el' binds to the view's
  // element.
  setCallbacks : function(callbacks) {
    var self = this;
    (callbacks || this.callbacks).forEach(function(triplet) {
      var selector = triplet[0], ev = triplet[1], methodName = triplet[2];
      var method = function () {
        return me[methodName].apply(me, arguments);
      }
      (selector == 'el' ? $(me.el) : $(selector, me.el)).bind(ev, method);
    });
  }
};
