/*
 * jQuery NAME Plugin
 * Version: x.x
 * URL: URL
 * Description: DESCRIPTION
 * Requires: JQUERY_VERSION, ETC.
 * Author: AUTHOR
 * Copyright: Copyright 2009 NAME
 */

(function($) {
  $.fn.PLUGIN = function(settings) {
    var settings = $.extend({
      PROPERTY: "VALUE"
    }, settings || {});

    $.fn.PLUGIN.el = $(this); // receiving DOM element

    // main plugin functionality
  };

  function privateFunction() {
    // private function
  }

  $.fn.PLUGIN.FUNCT = function() {
    // public plugin function
  }
})(jQuery);
