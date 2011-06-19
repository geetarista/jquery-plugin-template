# jQuery PLUGIN_NAME Plugin
# Version: x.x.x
# URL: URL
# Description: DESCRIPTION
# Requires: JQUERY_VERSION, OTHER_PLUGIN(S), ETC.
# Author: AUTHOR (AUTHOR_URL)
# Copyright: Copyright 2010 YOUR_NAME
# License: LICENSE_INFO

$ = jQuery

# Main plugin function
# Replace PLUGIN with the name of your desired function
$.fn.PLUGIN = (options) ->
  # Overwrite user options with plugin defaults
  opts = $.extend({}, $.fn.PLUGIN.defaults, options)
  # Iterate through DOM elements and work your magic
  @each(->
    $this = $(this)
    # This is where most of your plugin functionality resides
  )

# Public plugin function
# Replce PLUGIN with your plugin function's name
# Replace FUNCT with the name of the public function
$.fn.PLUGIN.FUNCT = ->

# Default settings for the plugin
$.fn.PLUGIN.defaults =
  property: "value"
  anotherProperty: 10

# Private function that is used within the plugin
privateFunction = ->

