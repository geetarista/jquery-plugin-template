# jQuery Plugin Template
# http://github.com/geetarista/jquery-plugin-template
#
# Robby Colvin
# http://robbycolvin.com
#
# For more information and sources of inspiration, see:
# http://docs.jquery.com/Plugins/Authoring
# http://www.learningjquery.com/2007/10/a-plugin-development-pattern
# 
# Everything below is just a scaffold for a jQuery plugin.
# Replace all instances of capitalization with your nomenclature.
# Remove this comment block and write your plugin!

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

