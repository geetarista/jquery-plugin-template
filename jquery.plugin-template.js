/** 
 * For more information and to see sources of information, see:
 * http://docs.jquery.com/Plugins/Authoring
 * http://www.learningjquery.com/2007/10/a-plugin-development-pattern
 */

/**
 * jQuery NAME Plugin
 * Version: x.x.x
 * URL: URL
 * Description: DESCRIPTION
 * Requires: JQUERY_VERSION, ETC.
 * Author: AUTHOR
 * AUTHOR URL
 * Copyright: Copyright 2010 NAME
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
      $this = $(this);

    // main plugin functionality
  };

  // Public plugin function
  // Replce PLUGIN with your plugin function's name
  // Replace FUNCT with the name of the public function
  $.fn.PLUGIN.FUNCT = function() {
    // Cool JS action
  }

  // 
  $.fn.PLUGIN.defaults = {
    property: "value",
    anotherProperty: 10
  };

  // Private function that is used within the plugin
  function privateFunction() {
    // Cool JS action
  }

})(jQuery); // end closure wrapper
