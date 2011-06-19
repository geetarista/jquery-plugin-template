/**
 * jQuery PLUGIN_NAME Plugin
 * Version: x.x.x
 * URL: URL
 * Description: DESCRIPTION
 * Requires: JQUERY_VERSION, OTHER_PLUGIN(S), ETC.
 * Author: AUTHOR (AUTHOR_URL)
 * Copyright: Copyright 2010 YOUR_NAME
 * License: LICENSE_INFO
 */

// Plugin closure wrapper
(function($) {
  
  // Main plugin function
  // Replace PLUGIN with the name of your desired function
  $.fn.PLUGIN = function(options) {
    
    // Overwrite user options with plugin defaults
    var opts = $.extend({}, $.fn.PLUGIN.defaults, options);

    // Iterate through DOM elements and work your magic
    return this.each(function() {
      // Assign the current object to a variable for easier use
      var $this = $(this);

      // This is where most of your plugin functionality resides

    }); // end return this.each

  }; // end $.fn.PLUGIN

  // Public plugin function
  // Replce PLUGIN with your plugin function's name
  // Replace FUNCT with the name of the public function
  $.fn.PLUGIN.FUNCT = function() {
    // Cool JS action
  }; // end $.fn.PLUGIN.FUNCT

  // Default settings for the plugin
  $.fn.PLUGIN.defaults = {
    property: "value",
    anotherProperty: 10
  };

  // Private function that is used within the plugin
  function privateFunction() {
    // Cool JS action
  }

})(jQuery); // end closure wrapper
