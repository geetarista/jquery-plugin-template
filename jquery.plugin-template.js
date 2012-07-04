/**
 * jQuery Plugin Plugin
 * Version: 0.0.0
 * URL: URL
 * Description: DESCRIPTION
 * Requires: JQUERY_VERSION, OTHER_PLUGIN(S), ETC.
 * Author: AUTHOR (AUTHOR_URL)
 * Copyright: Copyright 2012 YOUR_NAME
 * License: LICENSE_INFO
 */

// Plugin closure wrapper
// Uses dollar internally, but calls jQuery to prevent conflicts with other libraries
// Semicolon to prevent breakage with concatenation
// Pass in window as local variable for efficiency (could do same for document)
// Pass in undefined to prevent mutation in ES3
;(function($, document, window, undefined) {
  // Optional, but considered best practice by some
  "use strict";

  // Default options for the plugin as a simple object
  var defaults = {
    property: 'value',
    anotherProperty: 10
  };

  // Plugin constructor
  // This is the boilerplate to set up the plugin to keep our actual logic in one place
  function Plugin(element, options) {
    this.element = element;

    // Merge the options given by the user with the defaults
    this.options = $.extend({}, defaults, options)

    // Attach data to the elment
    this.$el      = $(el);
    this.$el.data(name, this);

    this.defaults = {};

    var meta      = this.$el.data(name + '-opts');
    this.opts     = $.extend(this.defaults, opts, meta);

    // Initialization code to get the ball rolling
    // If your plugin is simple, this may not be necessary and
    // you could place your implementation here
    this.init();
  }

  // Plugin initializer - prepare your plugin
  // This is a public function that users can call
  // Prototype methods are shared across all elements
  // If your plugin is complex, you can split functionality into more
  // methods like this one
  Plugin.prototype.init = function() {
    // You have access to this.options and this.element
  };

  $.fn.Plugin = function(options) {
    // global settings
    settings = $.extend({}, $.fn.wTooltip.defaultSettings, settings);
    // Iterate through each DOM element and return it
    return this.each(function() {
      // Assign the current object to a variable for easier use
      var element = this; // or $(this)

      // prevent multiple instantiations
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }

      new Plugin(this, options);

    }); // end return this.each

  }; // end $.fn.PLUGIN

  // Private function that is only called by the plugin
  var privateFunction = function() {
    // ...
  }

})(jQuery, document, window); // end closure wrapper
